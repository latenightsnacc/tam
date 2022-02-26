module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.db.define("notes", {
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
    venue: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    topic: {
        type: DataTypes.STRING,
        allowNull:true
    },
    start_time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    end_time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
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