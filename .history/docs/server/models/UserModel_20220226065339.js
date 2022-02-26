import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Corpers = db.define("corpers", {
    id:{
        type: DataTypes.INT,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    batch: {
        type: DataTypes.STRING
    },
    statecode: {
        type: DataTypes.STRING
    },
    cds_group: {
        type: DataTypes.STRING
    },
    lga: {
        type: DataTypes.STRING
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