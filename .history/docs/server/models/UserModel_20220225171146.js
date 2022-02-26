import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Users = db.define("corpers", {
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
    statecode: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
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

export default Users;