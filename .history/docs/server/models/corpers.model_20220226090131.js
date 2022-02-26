module.exports = (sequelize, Sequelize) => {
    const Corper = sequelize.define("corpers", {
        firstname: {
            type: Se.STRING,
            allowNull: false,
        },
        surname: {
            type: Se.STRING,
            allowNull: false
        },
        batch: {
            type: Se.STRING,
            allowNull: false
        },
        statecode: {
            type: Se.STRING,
            allowNull: false,
        },
        cds_group: {
            type: Se.STRING,
            allowNull:false
        },
        lga: {
            type: Se.STRING,
            allowNull: false
        },
        ppa: {
            type: Se.STRING,
            allowNull: false
        },
        email: {
            type: Se.STRING,
            allowNull: false
        },
        phone_no: {
            type: Se.STRING,
            allowNull:false
        },
        password: {
            type: Se.STRING,
            allowNull: false,
        },
        profile_pic: {
            type: Se.STRING,
            allowNull: false
        },
        status: {
            type: Se.STRING,
            allowNull: false
        },
        role: {
            type: Se.STRING,
            allowNull: false
        },
        state: {
            type: Se.STRING,
            allowNull: false
        }
    });
    return Corper;
}
