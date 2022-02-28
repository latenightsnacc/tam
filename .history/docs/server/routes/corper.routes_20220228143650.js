
module.exports = app => {
    const { authJwt } = require("../middleware");
    const corper = require("../controllers/corper.controller");
    const router = require("express").Router();
    app.use(function(req,res,next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    router.get("/api/dashboard/member", [authJwt.verifyToken], corper.findCorper);
    router.get("/api/dashboard/secretarygeneral", [authJwt.verifyToken, authJwt.isSecGen], corper.secGenDashboard);
    router.get("/api/dashboard/treasurer", [authJwt.verifyToken, authJwt.isTreasurer], corper.treasurerDashboard);
    router.get("/api/dashboard/treasurer", [authJwt.verifyToken, authJwt.isTreasurer], corper.treasurerDashboard);
    router.post("/", corper.createCorper);
    // router.post("/",  , corper.UploadProfilePic);
    // router.get("/member", dashboard.getMemberDashboard);
    app.use('/api/corpers', router);
}
