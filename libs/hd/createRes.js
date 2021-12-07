const chokidar = require("chokidar");
const fs = require("fs");
const path = require("path");

const buildType = process.argv[2];

/////======================================

//资源文件列表
let fileMap = [];
let excludeFileNames = [".DS_Store", ".rec"];

let basePath = path.resolve(__dirname, "../../laya/pages/");
let basePathRes = path.resolve(__dirname, "../../bin/res/");
let outFilePath = path.join(path.resolve(__dirname, "../../src/common/"), "Res.ts");

/**监听资源 变化  */
let resWatch = chokidar.watch(["laya/pages/**/*.scene", "bin/res/**/*"], {
    interval: 3000,
    awaitWriteFinish: {
        //文件发生变化发出事件之前保持多少毫秒不变
        stabilityThreshold: 3000,
        pollInterval: 3000,
    },
});

if (process.argv.includes("debug")) {
    resWatch.once("ready", (eventName) => {
        resWatch.on("all", (eventName) => {
            CreateResTS();
        });

        console.info("\x1b[33m", "res,laya/pages watching.....");
    });
}

let resMaps = [];
let audios = [];
function CreateResTS() {
    fileMap = [];
    resMaps = [];
    audios = [];
    getAllFilesByDir(basePath, [], fileMap, basePath);
    getAllFilesByDir(basePathRes, [], resMaps, basePathRes);

    for (let x = resMaps.length - 1; x > -1; x--) {
        if (resMaps[x].endsWith("mp3") || resMaps[x].endsWith("wav")) {
            audios.push(resMaps[x]);
        }
    }

    let resObj = `//代码生成，不要手动修改

/**
 * 界面列表
 */
 export enum views 
    ${formatResData(fileMap)}

 export enum audios 
    ${formatAudioData(audios)}

/**
 * 界面列表
 */
 export const scenes = [${fileMap
     .map(
         (e) => `
         "${e}"`
     )
     .toString()},${resMaps
        .map(
            (e) => `
            "res/${e}"`
        )
        .toString()}];
    

/**
 * 所有资源
 */
const Res = {
    views: views,
    scenes: scenes,
    audios: audios,
};

export default Res;
`;

    // 导出
    fs.writeFile(outFilePath, resObj, (err) => {
        if (err) {
            console.error("export error!");
            return;
        }
        console.info("\x1b[33m", "更新生成 Res.ts");
        if (!process.argv.includes("debug")) {
            console.log("结束构建");
            process.kill(process.pid);
        }
    });
}

/**
 * 把生成的资源列表转换成需要用的字符串  这里只做输出为
 * @param {string} list 资源名称列表
 * @returns 转换好的字符列表
 */
function formatResData(list = [], isView = true) {
    let str = "\n";
    for (let x = list.length - 1; x > -1; x--) {
        if (!list[x].endsWith(".scene") && isView) continue;

        str += `        /** ${list[x]} */\n        ${
            isView
                ? list[x].replace(/.+\//, "").replace(/\..+/, "")
                : list[x].replace(/\//g, "_").replace(/\..+/, "")
        } = "${list[x]}", \n`;
    }
    return `{${str}    }`;
}

function formatAudioData(list = []) {
    let str = "\n";
    for (let x = list.length - 1; x > -1; x--) {
        str += `        /** ${list[x]} */\n        ${list[x]
            .replace(/.+\//, "")
            .replace(/\..+/, "")} = "res/${list[x]}", \n`;
    }
    return `{${str}    }`;
}

// //这里的注释生成的文件名字是目录加文件名   目录_文件名
// function formatResData(list = []) {
//     let str = "\n";
//     for (let x = list.length - 1; x > -1; x--) {
//         str += `        /** ${list[x]} */\n        ${list[x]
//             .replace(/\//g, "_")
//             .replace(/\..+/, "")} = "${list[x]}", \n`;
//     }
//     return `{${str}    }`;
// }

/**
 * 获取所有res目录下的资源列表
 * @param laveDir 剩余需要查找目录
 * @param fileMap 已经缓存的目录列表
 * @param basePath 根地址
 */
function getAllFilesByDir(src, laveDir = [], fileMap = [], basePath) {
    let list = fs.readdirSync(src);
    for (let x = list.length - 1; x > -1; x--) {
        if (excludeFileNames.includes(list[x])) continue;
        let f = fs.statSync(path.join(src, list[x]));
        if (f.isDirectory()) {
            laveDir.push(path.join(src, list[x]));
        } else {
            let newPath = path.join(src, list[x]).replace(basePath, "");
            newPath = newPath.split(path.sep);
            newPath.shift(); //这里会多一个空，后期优化
            newPath = newPath.join("/");
            if (!fileMap.includes(newPath)) {
                fileMap.push(newPath);
            }
        }
    }
    if (!laveDir.length) return;
    return getAllFilesByDir(path.resolve(src, laveDir.shift()), laveDir || [], fileMap, basePath);
}

module.exports = { CreateResTS };
