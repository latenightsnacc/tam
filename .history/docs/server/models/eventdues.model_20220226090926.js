module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.db.define("event_dues", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
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
    payment_status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    amount_paid: {
        type: Sequelize.STRING,
        allowNull:false
    }
}, {
    freezeTableName:true
    });
    return Event;
}

