const express = require("express");
const cors = require("cors");
const doteenv = require("dotenv");
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on `)
})