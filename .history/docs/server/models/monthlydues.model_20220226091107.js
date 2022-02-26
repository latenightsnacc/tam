module.exports = (sequelize, Sequelize) => {
    const MonthlyDues = sequelize.db.define("monthly_dues", {
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
    return MonthlyDues;
}