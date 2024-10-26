import axios from "axios";

async function uploadToR2(filename, fileContent) {
  const fd = new FormData();

  const blob = new Blob([fileContent], { type: "application/octet-stream" });

  // Append the file and the filename to the form data
  fd.append("filename", filename);
  fd.append("file", blob, filename);

  try {
    await axios.post(process.env.R2_UPLOAD_API, fd, {
      headers: {
        "upload-key": process.env.R2_UPLOAD_KEY,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("File uploaded successfully:", filename);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

export default uploadToR2;
