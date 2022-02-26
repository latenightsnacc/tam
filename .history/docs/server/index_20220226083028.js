const express = require("express");
const cors = require("cors");
const doteenv = require("dotenv");
const app = express();
doteenv.config()
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})