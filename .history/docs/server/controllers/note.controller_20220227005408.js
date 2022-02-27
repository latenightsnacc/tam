const db = require("../models");
const Note = db.notes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Minutes can not be empty!"
        });
        return;
    }
    const note = {
        type: re.type,
        date: re.date,
        month: re.month,
        year: re.year,
        start: re.start,
        end: re.end,
        venue: re.venue,
        topic: re.topic,
        minutes: re.minutes
    }
};

exports.findAll = (req,res) => {

};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};