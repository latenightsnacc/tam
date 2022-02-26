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
    // Create corper
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
        profilePic: req.body.pofilePic[0],
        password: req.body.statecode,
        status: "Active",
        role: "Member",
        state: "Enugu" 
    }

    Corper.create(corper)
    .then((data) => {
        console.log("Corper's profile created: "+ JSON.stringify(corper, null, 4));
        res.send(data);
        // return Corper;
    }).catch( (err) => {
        res.status(500).send({
            message:
                err.message || "Error occured while creating profile!"
        })
        console.log("Error while creating Corper's Profile")
    })
}

exports.createAttendance = (corperId, attendance) => {
    if(!req.body){
        res.status(400).send({
            message: "Form fields incomplete!"
        })
        return;
    } 
    // attendance = {
    //     date: req.body.date,
    //     month: req.body.month,
    //     year: req.body.year,
    //     type: req.body.type,
    //     status: req.body.status,
    //     comment: req.body.comment
    // }

    Attendance.create({
        date: attendance.date,
        month: attendance.month,
        
        corperId: corperId,
    })
}