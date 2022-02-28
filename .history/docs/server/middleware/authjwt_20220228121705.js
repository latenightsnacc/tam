const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const Corper = db.corpers;
const Coordinator = db.coordinators;

verifyToken = (req, res, next) => {
    let token = req.headers["x-acess-token"]
}