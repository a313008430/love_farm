const { buildType } = require("./config");
const { CreateResTS } = require("./createRes");
const { EsBuildTs } = require("./esbuild");

if (process.argv.includes(buildType.test) || process.argv.includes(buildType.online)) {
    EsBuildTs().then(() => {
        console.log("build ts complete");
        CreateResTS();
    });
} else {
    CreateResTS();
    EsBuildTs();
}
