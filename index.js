const fs = require("fs");

const folderPath = "D:\\Node\\node-js-projects\\first-project\\";

fs.readdir(folderPath, (error, files) => {
  files.forEach((fileName, index) => {
    console.log("🚀 ~ fileName:", fileName);

    // var filePath = folderPath + fileName;
    // fs.readFile(filePath, "utf-8", (err, content) => {
    //   console.log("🚀 ~ content:", content);
    // });
  });
});

var filePath = folderPath + "\\package.json";
fs.readFile(filePath, "utf-8", (err, content) => {
  console.log("🚀 ~ content:", content);
});
