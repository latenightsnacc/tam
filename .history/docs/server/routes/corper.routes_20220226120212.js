module.exports = app => {
    const Corper = require("../controllers/corper.controller");
    const router = require("express").Router();

    router.post("/api/corpers", Corper.createCorper);

    app.use('/api/corpers', router);
}
