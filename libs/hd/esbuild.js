const esbuild = require("esbuild");
const chokidar = require("chokidar");
const { performance } = require("perf_hooks");

/**
 * 编译ts=>bundle.js
 */
function EsBuildTs() {
    esbuild
        .build({
            entryPoints: ["src/Main.ts"],
            outfile: "bin/js/bundle.js",
            bundle: true,
            sourcemap: "inline",
            watch: true,
            loader: { ".fs": "text", ".vs": "text", ".glsl": "text" },
        })
        .then((result) => {
            // Call "stop" on the result when you're done
            // result.stop();
        });
}

console.info("\x1b[33m", "ts watching.....");

/**
 * 监听src目录变化
 */
chokidar
    .watch(["src/**/*"], {
        interval: 500,
        awaitWriteFinish: {
            //文件发生变化发出事件之前保持多少毫秒不变
            stabilityThreshold: 1000,
            pollInterval: 500,
        },
    })
    .on("change", (path) => {
        let startTime = performance.now();
        EsBuildTs();
        console.log("\x1b[35m", `${path} ${(performance.now() - startTime).toFixed(2)}ms`);
    });

module.exports = { EsBuildTs };
