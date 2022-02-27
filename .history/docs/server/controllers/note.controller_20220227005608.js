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
        type: req.body.type,
        date: req.body.date,
        month: req.body.month,
        year: req.body.year,
        start: req.body.start,
        end: req.body.end,
        venue: req.body.venue,
        topic: req.body.topic,
        minutes: req.body.minutes
    };
    Note.create(note).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while creating note!"
        })
    })
};

exports.findAll = (req,res) => {

};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};