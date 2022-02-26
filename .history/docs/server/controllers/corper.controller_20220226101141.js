const db = require("../models");
const Corper = db.corpers;
const Attendance = db.attendance;
const MonthlyDues = db.monthlydues;
const ProjectFees = db.projectdues;
const EventFees = db.eventdues;

exports.createCorper = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Form fields incomplete!"
        })
        return;
    } 
    const corper = {
        firstname: req.body.firstname,
        surname: req.body.surname,
        batch: req.body.batch,
        statecode: req.body.statecode,
        cdsGroup: req.body.cdsGroup,
        lga: req.body.lga,
        ppa: req.body.ppa,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        phoneNo: req.body.pofilePic[0],
        password: req.body.statecode,
        status: "Active",
        role: "Member",
        state: "Enugu" 
    }
    return Corper.create({
        firstname: corper.firstname,
        surname: corper.surname,
        batch: corper.batch,
        statecode: corper.statecode,
        cdsGroup: corper.cdsGroup,
        lga: corper.lga,
        ppa: corper.ppa,
        email: corper.email,
        phoneNo: corper.phoneNo,
        password: corper.statecode,
        status: "Active",
        role: "Member",
        state: "Enugu" 
    }).then( (corper) => {
        console.log("Corper's profile created: "+ JSON.stringify(corper, null, 4));
        return Corper;
    }).catch( (err) => {
        console.log("Error while creating Corper's Profile")
    })
}