module.exports = (sequelize, Sequelize) => {
    const ProjectFees = sequelize.db.define("project_fees", {
    batch: {
        type: Se.STRING,
        allowNull: false,
    },
    title: {
        type: Se.STRING,
        allowNull: false,
    },
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
    payment_status: {
        type: Se.STRING,
        allowNull: false,
    },
    amount_paid: {
        type: Se.STRING,
        allowNull:false
    }
});
return ProjectFees;
}