const db = require("../models");
const Corper = db.corpers;
const Attendance = db.attendance;
const MonthlyDues = db.monthlydues;
const ProjectFees = db.projectdues;
const EventFees = db.eventdues;

exports.createCorper = (req, res) => {
    if(!req.body)
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