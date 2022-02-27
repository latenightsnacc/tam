const multer = require("multer");
const imageFilter = (req, file, cb) => {
    if(file.mimetype.startsWith("image")) {
        cb
    }
}