const express = require("express");
const app = express();
const bodyParser = require("body-parser")

require("dotenv").config();

// console.log(process.env.PORT);
const port = process.env.PORT || 3000;
const d = new Date();

app.listen(port,function () {
    console.log(`${d} - Server is Started on port:${port}`)
})