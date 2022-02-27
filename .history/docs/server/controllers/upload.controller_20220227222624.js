const fs = require("fs");
const db = require("../models");
const ProfilePic = db.uploads;
const uploadFiles = async (req, res) => {
    try {
        console.log(req.file);
        if(req.file === undefined) {
            return res.send("Please select an image file.")
        }
        ProfilePic.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync('http://localhost:3000/images/'+req.file.filename),
        }).then((image) => {
            fs.writeFileSync('./public/images'+image.name, image.data)
            return res.send('File has been uploaded');
        }).catch(error => {
            console.log(error);
            return res.send(`Error when trying to upload images: ${error}`)
        })
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    uploadFiles
}