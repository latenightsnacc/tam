module.exports = app => {
    const corper = require("../controllers/corper.controller");
    const upload = require("../middleware/upload");
    const express = require("express");
    const router = require("express").Router();
    
    router.post("/",  corper.createCorper);

    app.use('/api/corpers', router);
}
