const path = require("path");

const home = (req, res) => {
    return res.sendFile(path.join(`${__dirname}../../client/src/dashboard/member`));
};

module.exports = {
    getMemberDashboard: home
}