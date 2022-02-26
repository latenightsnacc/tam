module.exports = (sequelize, Sequelize) => {
    const Corper = sequelize.define("corpers", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        batch: {
            type: DataTypes.STRING,
            allowNull: false
        },
        statecode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cds_group: {
            type: DataTypes.STRING,
            allowNull:false
        },
        lga: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ppa: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_no: {
            type: DataTypes.STRING,
            allowNull:false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profile_pic: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
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
    return Corper;
}
