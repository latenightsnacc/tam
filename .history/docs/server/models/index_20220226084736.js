const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER,dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.corpers = require("./corpers.model")(sequelize, Sequelize);
db.attendance = require("./corpers.model")(sequelize, Sequelize);
db.notes = require("./corpers.model")(sequelize, Sequelize);
db.projectdues = require("./corpers.model")(sequelize, Sequelize);
db.c = require("./corpers.model")(sequelize, Sequelize);
module.exports = db;