import fs from "fs";
import uploadToR2 from "./uploadToR2.js";
import path from "path";

const imageRegex = /!\[.*?\]\((.*?)\)/g;
function handleImages(fileContent) {
  let match;
  while ((match = imageRegex.exec(fileContent)) !== null) {
    let imagePath = match[1];
    let imageFilename = imagePath.substring(imagePath.lastIndexOf("/") + 1);
    const imageDirectoryPath = path.join("upload", "images");

    uploadToR2(
      imageFilename,
      fs.readFileSync(path.join(imageDirectoryPath, imageFilename))
    );
    const imageLink = `https://files.yajatvishwakarma.com/${imageFilename}`;
    fileContent = fileContent.replace(imagePath, imageLink);
  }
  console.log(`Images processed`);
  return fileContent;
}
export default handleImages;
