const express = require("express");
const errormiddleware = require("../backend/Middleware/error")
const app = express();
const cookieParser = require("cookie-parser")

app.use(express.json())
app.use(cookieParser())

//Route Imports

const user = require("./routes/userRoute")
app.use("/urbanglide/v1",user);

const trip = require("./routes/tripRoute")
app.use("/urbanglide/v1",trip)


app.use(errormiddleware)
module.exports = app;

