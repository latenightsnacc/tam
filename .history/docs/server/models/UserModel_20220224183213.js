import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Users = db.define("users", {
    name: {
        type: D
    }
})