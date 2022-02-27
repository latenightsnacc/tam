module.exports = app => {
    const corper = require("../controllers/corper.controller");
    const upload = require("../controllers/upload.controller");
    const router = require("express").Router();
    router.post("/",  corper.createCorper);
    router.post("/",  );

    app.use('/api/corpers', router);
}
