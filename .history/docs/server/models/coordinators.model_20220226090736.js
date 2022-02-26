module.exports = (sequelize, Sequelize) => {
    const Coordinator = sequelize.db.define("coordinators", {
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
    });
    return Coordinator;
}

