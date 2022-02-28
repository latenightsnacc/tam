
module.exports = app => {
    const corper = require("../controllers/corper.controller");
    const router = require("express").Router();
    router.post("/", corper.createCorper);
    // router.post("/",  , corper.UploadProfilePic);
    // router.get("/member", dashboard.getMemberDashboard);
    app.use('/api/corpers', router);
}
