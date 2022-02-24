module.exports = function(app) {

    app.use(function(req,res,next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/dashboard/member",
    [authJwt.verifyToken, authJwt.isMember],
    controller.member
    );
    app.get("/api/dashboard/treasurer",
    [authJwt.verifyToken, authJwt.isTreasurer],
    controller.treasurer
    );
    app.get("/api/dashboard/secretarygeneral",
    [authJwt.verifyToken, authJwt.isSecretaryGeneral],
    controller.secretarygeneral
    );
    app.get("/api/dashboard/president",
    [authJwt.verifyToken, authJwt.isPresident],
    controller.president
    );
    app.get("/api/dashboard/coordinator",
    [authJwt.verifyToken, authJwt.isCoordinator],
    controller.coordinator
    );
}