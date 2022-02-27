module.exports = app => {
    const corper = require("../controllers/corper.controller");
    const upload = require("../controllers/upload.controller");
    const dashboard = require("../controllers/")
    const router = require("express").Router();
    router.post("/",  corper.createCorper);
    router.post("/", upload.single("profilePic") ,upload.uploadFiles);

    app.use('/api/corpers', router);
}
