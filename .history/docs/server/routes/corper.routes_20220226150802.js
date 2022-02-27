module.exports = app => {
    const Corper = require("../controllers/corper.controller");
    const router = require("express").Router();

    router.post("/", Corper.create);

    app.use('/api/corpers', router);
}
