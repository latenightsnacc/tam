module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define("notes", {
    date: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    month: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.STRING,
        allowNull: false
    },
    venue: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    topic: {
        type: Sequelize.STRING,
        allowNull:true
    },
    start_time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    end_time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    minutes: {
        type: Sequelize.STRING,
        allowNull:false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cds_group: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
    });
return Note;
}