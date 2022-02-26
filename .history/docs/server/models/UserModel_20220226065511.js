import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Corpers = db.define("corpers", {
    id:{
        type: DataTypes.INT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    batch: {
        type: DataTypes.STRING,
        allowNull: false
    },
    statecode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cds_group: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lga: {
        type: DataTypes.STRING,
        allowNull
    },
    ppa: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone_no: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    profile_pic: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName:true
});

(async () => {
    await db.sync();
})();

export default Corpers;