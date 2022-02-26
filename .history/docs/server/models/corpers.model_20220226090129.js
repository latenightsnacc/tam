module.exports = (sequelize, Sequelize) => {
    const Corper = sequelize.define("corpers", {
        firstname: {
            type: .STRING,
            allowNull: false,
        },
        surname: {
            type: .STRING,
            allowNull: false
        },
        batch: {
            type: .STRING,
            allowNull: false
        },
        statecode: {
            type: .STRING,
            allowNull: false,
        },
        cds_group: {
            type: .STRING,
            allowNull:false
        },
        lga: {
            type: .STRING,
            allowNull: false
        },
        ppa: {
            type: .STRING,
            allowNull: false
        },
        email: {
            type: .STRING,
            allowNull: false
        },
        phone_no: {
            type: .STRING,
            allowNull:false
        },
        password: {
            type: .STRING,
            allowNull: false,
        },
        profile_pic: {
            type: .STRING,
            allowNull: false
        },
        status: {
            type: .STRING,
            allowNull: false
        },
        role: {
            type: .STRING,
            allowNull: false
        },
        state: {
            type: .STRING,
            allowNull: false
        }
    });
    return Corper;
}
