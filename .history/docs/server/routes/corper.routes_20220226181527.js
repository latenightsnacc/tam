module.exports = app => {
    const corper = require("../controllers/corper.controller");
    const upload = require("../middleware/upload");
    const router = require("express").Router();

    router.post("/", upload.single(""), corper.createCorper);

    app.use('/api/corpers', router);
}
