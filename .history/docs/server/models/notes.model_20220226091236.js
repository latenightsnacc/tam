module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.db.define("notes", {
    date: {
        type: Sequ.STRING,
        allowNull: false,
    },
    month: {
        type: Sequ.STRING,
        allowNull: false
    },
    year: {
        type: Sequ.STRING,
        allowNull: false
    },
    venue: {
        type: Sequ.STRING,
        allowNull: false,
    },
    topic: {
        type: Sequ.STRING,
        allowNull:true
    },
    start_time: {
        type: Sequ.STRING,
        allowNull: false
    },
    end_time: {
        type: Sequ.STRING,
        allowNull: false
    },
    type: {
        type: Sequ.STRING,
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