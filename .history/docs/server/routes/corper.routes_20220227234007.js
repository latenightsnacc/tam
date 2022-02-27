module.exports = app => {
    const corper = require("../controllers/corper.controller");
    const 
    const router = require("express").Router();
    router.post("/",  corper.createCorper);

    app.use('/api/corpers', router);
}
