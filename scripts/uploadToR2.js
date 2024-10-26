import axios from "axios";

async function uploadToR2(filename, fileContent) {
  const fd = new FormData();

  // Convert file content to Blob with Markdown MIME type
  const blob = new Blob([fileContent], { type: "text/markdown" });

  // Append the file and the filename to the form data
  fd.append("filename", filename);
  fd.append("file", blob, filename);

  try {
    await axios.post(process.env.R2_UPLOAD_API, fd, {
      headers: {
        ...fd.getHeaders(), // Only necessary in Node.js environments
      },
    });
    console.log("File uploaded successfully:", filename);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

export default uploadToR2;
