
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const db = require("./config/Database");
// import db from "./config/Database";
// import router from "./routes/index";

dotenv.config();
const app = express();

app.use(cors( { credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.json({message: "ICT CDS E-ATTENDANCE"})
})
app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));