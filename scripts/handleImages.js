import fs from "fs";
import uploadToR2 from "./uploadToR2.js";

const imageRegex = /!\[.*?\]\((.*?)\)/g;
function handleImages(fileContent) {
  let match;
  while ((match = imageRegex.exec(fileContent)) !== null) {
    let imagePath = match[1];
    let imageFilename = imagePath.substring(imagePath.indexOf("/") + 1);

    uploadToR2(imageFilename, fs.readFileSync(imagePath));
    const imageLink = `https://files.yajatvishwakarma.com/${imageFilename}`;
    fileContent.replace(match, imageLink);
  }
  return fileContent;
}
export default handleImages;
