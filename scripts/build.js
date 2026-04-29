const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
const sourceDir = path.join(rootDir, "src");
const outputDir = path.join(rootDir, "dist");

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

fs.cpSync(sourceDir, path.join(outputDir, "src"), {
  recursive: true,
});

const packageInfo = {
  name: "pr-quality-gate-build",
  version: "1.0.0",
  main: "src/server.js",
  scripts: {
    start: "node src/server.js",
  },
};

fs.writeFileSync(
  path.join(outputDir, "package.json"),
  JSON.stringify(packageInfo, null, 2),
);

console.log("Build completed successfully.");
console.log("Output written to dist/");
