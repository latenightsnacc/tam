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
            res.status(400).send({
                message: "Failed! Statecode is already in use!"
            });
            return;
        } 
    })

    Corper.findOne({
        where: {
            email:req.body.email
        }
    }).then(corper => {
        if(corper) {
            res.status(400).send({
                message: "Email is already in use!"
            })
            return;
        }
        next();
    })
}

checkDuplicateEmail = (req, res, next) => 
const verifySignUp = {
    checkDuplicateStatecodeOrEmail: checkDuplicateStatecodeOrEmail
}

module.exports = verifySignUp;