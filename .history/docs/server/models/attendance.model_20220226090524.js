module.exports = (sequelize, Sequelize) => {
    const Attendance = sequelize.define("attendance", {
    // id:{
    //     type: DataTypes.INT,
    //     primaryKey: true,
    //     allowNull: false,
    //     autoIncrement: true
    // },
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
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
return Attendance;
}

