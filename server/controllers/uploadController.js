 
import { v4 as uuidv4 } from "uuid";
import multer from "multer";
import path from "path"
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function(req, file, cb)  {
    const uniqueId=Math.random().toString(36).substring(2,8);
    //cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
    cb(null,`${uniqueId}_${file.originalname}`)
  },
});

const fileFilter = (req, file, cb) => {
 
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); 
  }
 
export {fileFilter,storage}
 