const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://MUBEENA:mubeena@myapp.psuejwj.mongodb.net/signDB")
app.use("/", require("./routes/signRoutes"));
app.listen(3001, function() {
    console.log("express server is running on server 3001");
})