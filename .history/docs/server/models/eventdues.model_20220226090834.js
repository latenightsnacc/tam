import { Sequelize } from "sequelize";
import db from "../config/db.config";

const { DataTypes } = Sequelize;

const EventDues = db.define("event_dues", {
    id:{
        type: DataTypes.INT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    month: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false
    },
    payment_status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount_paid: {
        type: DataTypes.STRING,
        allowNull:false
    }
}, {
    freezeTableName:true
});

