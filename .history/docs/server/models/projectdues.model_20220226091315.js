module.exports = (sequelize, Sequelize) => {
    const ProjectDues = sequelize.db.define("project_dues", {
    
    batch: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
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
    payment_status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount_paid: {
        type: DataTypes.STRING,
        allowNull:false
    }
}, {
    freezeTableName:true
});

(async () => {
    await db.sync();
})();

export default ProjectDues;