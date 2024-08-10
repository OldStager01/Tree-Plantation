import { bucket } from "../../config/firebase.js";

const uploadFile = async (filename, filePath, uploadPath, mimetype) => {
  try {
    const options = {
      destination: `${uploadPath}/${filename}`,
      metadata: {
        contentType: mimetype,
      },
      gzip: true,
    };
    await bucket.upload(filePath, options);
    return filename;
  } catch (error) {
    console.error("uploadFile :: error", error);
    throw new Error(error);
  }
};
export { uploadFile };
