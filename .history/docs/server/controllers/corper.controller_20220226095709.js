const db = require("../models");
const Corper = db.corpers;
const Attendance = db.attendance;
const MonthlyDues = db.monthlydues;
const ProjectFees = db.projectdues;
const EventFees = db.eventdues;

exports.createCorper = (corper) => {
    return Corper.create({
        firstname: cor
    })
}