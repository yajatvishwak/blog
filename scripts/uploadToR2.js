import axios from "axios";

async function uploadToR2(filename, fileContent) {
  const fd = new FormData();
  // Append the file and the filename to the form data
  console.log(fileContent);
  fd.append("filename", filename);
  fd.append("file", fileContent, filename);

  try {
    await axios.post("https://api.yajatvishwakarma.com/upload-blog-file", fd, {
      headers: {
        ...fd.getHeaders(),
      },
    });
    console.log("File uploaded successfully:", filename);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

export default uploadToR2;
