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
        type: response.data.type,
        date: response.data.date,
        month: response.data.month,
        year: response.data.year,
        start: response.data.start,
        end: response.data.end,
        venue: response.data.venue,
        topic: response.data.topic,
        minutes: response.data.minutes
    }
};

exports.findAll = (req,res) => {

};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};