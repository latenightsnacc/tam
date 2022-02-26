const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

app.use(cors({origin: "http://localhost:3000"}))
app.use(express.json());
app.use(express.urlencoded())
dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})