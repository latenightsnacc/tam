import { Sequelize } from "sequelize";
import db from "../config/db.config";

const { DataTypes } = Sequelize;

const Coordinator = db.define("coordinators", {
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
    lga: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    cds_group: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
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

export default Coordinator;