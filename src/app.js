const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

const indexRouter= require('./routes/index')

app.use("/", indexRouter);

module.exports = app;