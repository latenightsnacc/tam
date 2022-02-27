const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"./");
    },
    filename:(req, file, cb) => {
        cb(null, `${Date.now()}-nysc-${file.originalname}`);
    }
});
const uploadFile = multer({
    storage: storage})
module.exports = uploadFile;