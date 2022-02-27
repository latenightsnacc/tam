const { path } = require("express/lib/application");
const multer = require("multer");
const imageFilter = (req, file, cb) => {
    if(file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb("Please upload only images.", false);
    }
};

const storage = multer.diskStorage({
    // './public/images/' directory name to save teh file
    destination: (req, file, cb) => {
        cb(null, './public/images/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname +'-'+ Date.now() + path.extname(file.originalname))
    }
})

const uploadFile = multer({
    storage:storage,
    fileFilter: imageFilter
});

module.exports = 