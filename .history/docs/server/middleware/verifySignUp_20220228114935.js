const db = require("../models");
const Corper = db.corpers;
const Coordinator = db.coordinators;

checkDuplicateStatecodeOrEmail = (req, res, next) => {
    // Statecode
    Corper.findOne({
        where: {
            statecode: req.body.statecode
        }
    }).then(corper => {
        if(corper) {
            res.status(400)
        } 
    })
}