 import { fileFilter,storage } from "../controllers/uploadController.js";
 import Upload from "../models/uploadModel.js";
 import multer from "multer";
 import express from "express";
 import https from "https"
 const uploadrouter = express.Router();
 let upload = multer({ storage, fileFilter });
uploadrouter.route("/add").post(upload.single("file"), async (req, res) => {
  try {
    const { title, description } = req.body;
    const { path, mimetype } = req.file;
    const file = new Upload({
      title,
      description,
      file_path: path,
      file_mimetype: mimetype,
    });
    await file.save();
    res.send("file uploaded successfully.");
  } catch (error) {
    res.status(400).send("Error while uploading file. Try again later.");
  }

  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  };
});
uploadrouter.route("/getFiles").get(  async (req, res) => {
  try {
    const files = await Upload.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send("Error while getting list of files. Try again later.");
  }
});

uploadrouter.route("/download/:id").get(  async (req, res) => {
  try {
    const file = await Upload.findById(req.params.id);
    if(!file){
      return res.status(404).json({message:"file doesnt exist"})
    }
   
 res.set({
      "Content-Type": file.file_mimetype,
    });
    res.sendFile(path.join(__dirname,  "/server/images", file.file_path));
    console.log(__dirname)  
  } catch (error) {
    res.status(400).send(error.message);
  }
});
export default uploadrouter