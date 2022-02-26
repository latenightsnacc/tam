import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Users = db.define("corpers", {
    firstname: {
        type: DataTypes.STRING
    },
    firstname: {
        type: DataTypes.STRING
    },
    firstname: {
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