const path = require("path");
const { default: Member } = require("../../client/src/dashboard/Member");
const home = (req, res) => {
    return res.sendFile(path.join(`${__dirname}../../client/src/dashboard/Member`));
};

module.exports = {
    getMemberDashboard: Member
}