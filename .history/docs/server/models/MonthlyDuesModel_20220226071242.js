import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const MonthlyDues = db.define("monthly_dues", {
    id:{
        type: DataTypes.INT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    month: {
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
        allowNull: false
    },
    ppa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_no: {
        type: DataTypes.STRING,
        allowNull:false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profile_pic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName:true
});

(async () => {
    await db.sync();
})();

export default MonthlyDues;