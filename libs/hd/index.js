const { CreateResTS } = require("./createRes");
const { EsBuildTs } = require("./esbuild");

if (process.argv.includes("debug")) {
    CreateResTS();
    EsBuildTs();
} else {
    EsBuildTs().then(() => {
        console.log("build ts complete");
        CreateResTS();
    });
}
