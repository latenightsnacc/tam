
module.exports = app => {
    const { authJwt } = require("../middleware");
    const corper = require("../controllers/corper.controller");
    const router = require("express").Router();
    app.use(function(req,res,next))
    router.post("/", corper.createCorper);
    // router.post("/",  , corper.UploadProfilePic);
    // router.get("/member", dashboard.getMemberDashboard);
    app.use('/api/corpers', router);
}
