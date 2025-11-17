const fs = require("fs");

const folderPath = "D:\\Node\\node-js-projects\\first-project\\";

// NonBlocking
fs.readdir(folderPath, (error, files) => {
  files.forEach((fileName, index) => {
    console.log("🚀 NonBlocking ~ fileName:", fileName);
  });
});

// Blocking
var filePath = folderPath + "\\package.json";
var content = fs.readFileSync(filePath, "utf-8"   );
console.log("🚀 Blocking ~ content:", content)
