
module.exports = (sequelize, Sequelize) => {
    const ProfilePic = sequelize.define("upload", {
        type: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
        },
    });
}