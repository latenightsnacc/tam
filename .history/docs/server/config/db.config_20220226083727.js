// import { Sequelize } from "sequelize";

// const db = new Sequelize('e_attendance', 'root', '', {
//     host: "localhost",
//     dialect: "mysql"
// })

// export default db;
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "e_attendance",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire
    }
}