
const Corper = sequelize.define("corpers", {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    batch: {
        type: Sequelize.STRING,
        allowNull: false
    },
    statecode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cdsGroup: {
        type: Sequelize.STRING,
        allowNull:false
    },
    lga: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ppa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNo: {
        type: Sequelize.STRING,
        allowNull:false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const ProfilePic = sequelize.define("uploads", {
    type: {
        type: Sequelize.STRING,
    },
    name: {
        type: Sequelize.STRING,
    },
    data: {
        type: Sequelize.BLOB("long"),
    },
});

ProfilePic.belon

