module.exports = app => {
    const Corper = require("../controllers/corper.controller");
    const router = require("express").Router();

    router.post("/", Corper.createCorper);

    
}