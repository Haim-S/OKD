const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use("/", require("../routes"));


app.all("*", (req, res, next) => {
    res.status(500).send("error server")
    next();
})

module.exports = app;



