module.exports = app => {
    const corper = require("../controllers/corper.controller");
    const upload = require("../middleware/upload");
    const express = require("")
    const router = require("express").Router();
    app.use(express.static(__dirname + '/public'));
    app.use('/uploads', express.static('uploads'));v
    router.post("/", upload.single("profilePic"), corper.createCorper);

    app.use('/api/corpers', router);
}
