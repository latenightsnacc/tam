const db = require("../models");
const Note = db.notes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400)
    }
};

exports.findAll = (req,res) => {

};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};