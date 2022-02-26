module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.db.define("notes", {
    date: {
        type: Se.STRING,
        allowNull: false,
    },
    month: {
        type: Se.STRING,
        allowNull: false
    },
    year: {
        type: Se.STRING,
        allowNull: false
    },
    venue: {
        type: Se.STRING,
        allowNull: false,
    },
    topic: {
        type: Se.STRING,
        allowNull:true
    },
    start_time: {
        type: Se.STRING,
        allowNull: false
    },
    end_time: {
        type: Se.STRING,
        allowNull: false
    },
    type: {
        type: Se.STRING,
        allowNull: false
    },
    minutes: {
        type: DataTypes.STRING,
        allowNull:false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cds_group: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
    });
return Note;
}