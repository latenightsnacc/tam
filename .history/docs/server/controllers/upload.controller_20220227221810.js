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
            
        })
    } catch (e) {
        console.log(e);
    }
}