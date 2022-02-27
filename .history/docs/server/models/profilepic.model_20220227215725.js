const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Corper = sequelize.define("corpers", {