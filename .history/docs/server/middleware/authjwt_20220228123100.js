const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const Corper = db.corpers;
const Coordinator = db.coordinators;

verifyToken = (req, res, next) => {
    let token = req.headers["x-acess-token"];
    if(!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) {
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }
        req.userId = decoded.id;
        next();
    });
};

isSecGen = (req, res, next) => {
    Corper.findOne(req.userId)
    .then(corper => {
        if(corper.roles.includes('Secretary General')) {
            next();
        }
        res.status(403).send({
            message: "Require Secretary General Role!"
        });
        return;
    })
}

isTreasurer = (req, res, next) => {
    Corper.findOne(req.userId)
    .then(corper => {
        if(corper.roles.includes('Treasurer')) {
            next();
        }
        res.status(403).send({
            message: "Require Treasurer Role!"
        });
        return;
    })
}

isPresident = (req, res, next) => {
    Corper.findOne(req.userId)
    .then(corper => {
        if(corper.roles.includes('President')) {
            next();
        }
        res.status(403).send({
            message: "Require President Role!"
        });
        return;
    })
}

const authJwt = {
    verifyToken: verifyToken
}