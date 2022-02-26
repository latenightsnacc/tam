const db = require("../models");
const Corper = db.corpers;
const Attendance = db.attendance;
const MonthlyDues = db.monthlydues;
const ProjectFees = db.projectdues;
const EventFees = db.eventdues;

// Create Corper Profile
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

// Retrieve All Corpers where CDS = CDS

// 
exports.createAttendance = (corperId, attendance) => {   
    return Attendance.create({
        date: attendance.date,
        month: attendance.month,
        year: attendance.year,
        type: attendance.type,
        status: attendance.status,
        comment: attendance.comment,
        corperId: corperId,
    }).then( (attendance) => {
        console.log("Attendance recorded" + JSON.stringify(attendance, null,4));
        return attendance;
    }).catch((err) => {
        console.log("Errow while creating attendance record: " + err);
    })
}
exports.createMonthlyDues = (corperId, monthlydues) => {   
    return MonthlyDues.create({
        date: monthlydues.date,
        month: monthlydues.month,
        year: monthlydues.year,
        type: monthlydues.type,
        paymentStatus: monthlydues.paymentStatus,
        amountPaid: monthlydues.amountPaid,
        corperId: corperId,
    }).then( (attendance) => {
        console.log("Monthly dues recorded" + JSON.stringify(monthlydues, null,4));
        return attendance;
    }).catch((err) => {
        console.log("Errow while recording monthly dues: " + err);
    })
}
exports.createProjectFees = (corperId, projectfees) => {   
    return ProjectFees.create({
        batch: projectfees.batch,
        title:projectfees.title,
        date: projectfees.date,
        month: projectfees.month,
        year: projectfees.year,
        paymentStatus: projectfees.paymentStatus,
        amountPaid: projectfees.amountPaid,
        corperId: corperId,
    }).then( (projectfees) => {
        console.log("Project Fees recorded:" + JSON.stringify(projectfees, null,4));
        return attendance;
    }).catch((err) => {
        console.log("Errow while recording project fees: " + err);
    })
}
exports.createEventFees = (corperId, eventfees) => {   
    return EventFees.create({
        title: eventfees.title,
        date: eventfees.date,
        month: eventfees.month,
        year: eventfees.year,
        paymentStatus: eventfees.paymentStatus,
        amountPaid: eventfees.amountPaid,
        corperId: corperId,
    }).then( (eventfees) => {
        console.log("Event fees recorded:" + JSON.stringify(eventfees, null,4));
        return eventfees;
    }).catch((err) => {
        console.log("Errow while recording Event Fees: " + err);
    })
}