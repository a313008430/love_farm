const esbuild = require("esbuild");
const chokidar = require("chokidar");
const { performance } = require("perf_hooks");
const { buildType } = require("./config");

const build_type = process.argv[2];

/**
 * 编译ts=>bundle.js
 */
// let rebuild;
function EsBuildTs() {
    // if (rebuild) {
    //     return rebuild.rebuild();
    // }

    if (
        process.argv.includes(buildType.debug) ||
        process.argv.includes(buildType.debug_test_start)
    ) {
        console.info("\x1b[33m", "ts watching.....");
        esbuild
            .build({
                entryPoints: ["src/Main.ts"],
                outfile: "bin/js/bundle.js",
                bundle: true,
                sourcemap: "inline",
                incremental: true,
                define: {
                    BUILD_TYPE: JSON.stringify(
                        build_type == buildType.debug ? build_type : buildType.test
                    ),
                },
                // watch: true,
                watch: {
                    onRebuild(e, s) {
                        if (e) {
                            return console.error(e);
                        }
                        console.log("rebuild~~~ " + new Date().toTimeString().slice(0, 8));
                    },
                },
                loader: { ".fs": "text", ".vs": "text", ".glsl": "text" },
            })
            .then((result) => {
                // rebuild = result;
                // result.rebuild
                // console.log(result);
                // Call "stop" on the result when you're done
                // result.stop();
            });
    } else {
        console.log("start build ts");
        return esbuild.build({
            entryPoints: ["src/Main.ts"],
            outfile: "bin/js/bundle.js",
            bundle: true,
            // sourcemap: "inline",
            incremental: true,
            define: { BUILD_TYPE: JSON.stringify(build_type) },
            loader: { ".fs": "text", ".vs": "text", ".glsl": "text" },
        });
    }
}

/**
 * 监听src目录变化
 */
// chokidar
//     .watch(["src/**/*"], {
//         interval: 0,
//         awaitWriteFinish: {
//             //文件发生变化发出事件之前保持多少毫秒不变
//             stabilityThreshold: 0,
//             pollInterval: 0,
//         },
//     })
//     .on("change", (path) => {
//         let startTime = performance.now();
//         EsBuildTs();
//         console.log("\x1b[35m", `${path} ${(performance.now() - startTime).toFixed(2)}ms`);
//         // console.log("\x1b[35m", `${path}`);
//     });

module.exports = { EsBuildTs };
