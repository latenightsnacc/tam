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
        type: req.bod.type,
        date: req.bod.date,
        month: req.bod.month,
        year: req.bod.year,
        start: req.bod.start,
        end: req.bod.end,
        venue: req.bod.venue,
        topic: req.bod.topic,
        minutes: req.bod.minutes
    }
};

exports.findAll = (req,res) => {

};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};