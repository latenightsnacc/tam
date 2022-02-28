const db = require("../models");
const Corper = db.corpers;
const Coordinator = db.coordinators;

checkDuplicateStatecodeOrEmail = (req, res, next) => {
    // Statecode
    Corper.
}