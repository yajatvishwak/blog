import fs from "fs";
import uploadToR2 from "./uploadToR2.js";
import path from "path";

const imageRegex = /!\[.*?\]\((.*?)\)/g;
function handleImages(fileContent) {
  let match;
  while ((match = imageRegex.exec(fileContent)) !== null) {
    let imagePath = match[1];
    let imageFilename = imagePath.substring(imagePath.lastIndexOf("/") + 1);
    fs.readdir(".", (err, files) => {
      if (err) {
        console.error(`Error: ${err.message}`);
        return;
      }
      console.log("Files:", files);
      console.log("Files:", process.cwd());
    });
    const imageDirectoryPath = path.join("upload", "images");
    console.log("Image filename:", imageFilename);
    console.log("full path", path.join(imageDirectoryPath, imageFilename));

    uploadToR2(
      imageFilename,
      fs.readFileSync(path.join(imageDirectoryPath, imageFilename))
    );
    const imageLink = `https://files.yajatvishwakarma.com/${imageFilename}`;
    fileContent.replace(match, imageLink);
  }
  return fileContent;
}
export default handleImages;
