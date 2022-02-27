const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./models");

const app = express();

app.use(cors({origin: "http://localhost:3000"}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(express.static("./public"))
db.sequelize.sync();
// .then(() => {
//     console.log("Drop and re-sync db");
// });

app.get("/", (req,res) => {
    res.json({message: "NYSC CDS E-ATTENDANCE BUILT BY DEBTHEBUILDER"})
})

require("./routes/corper.routes")(app);
require("./routes/note.routes")(app);

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})