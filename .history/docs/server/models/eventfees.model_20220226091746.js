module.exports = (sequelize, Sequelize) => {
    const EventFees = sequelize.db.define("event_fees", {
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
    });
    return EventFees;
}

