module.exports = app => {
    const corper = require("../controllers/corper.controller");
    const router = require("express").Router();

    router.post("/", Corper.createCorper);

    app.use('/api/corpers', router);
}
