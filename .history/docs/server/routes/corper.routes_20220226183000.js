module.exports = app => {
    const corper = require("../controllers/corper.controller");
    const upload = require("../middleware/upload");
    const express = require("express");
    const router = require("express").Router();
    app.use(express.static(__dirname + '/assets'));
    app.use('../assets/uploads/', express.static('uploads'));
    router.post("/", upload.single("profilePic"), corper.createCorper);

    app.use('/api/corpers', router);
}
