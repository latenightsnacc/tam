module.exports = app => {
    const corper = require("../controllers/corper.controller");
    const uploadController = require("../controllers/upload.controller");
    const upload = requ
    const dashboard = require("../controllers/memberdashboard.controller");
    const router = require("express").Router();
    router.post("/",  corper.createCorper);
    router.post("/", upload.single("profilePic") ,uploadController.uploadFiles);
    // router.get("/member", dashboard.getMemberDashboard);
    app.use('/api/corpers', router);
}
