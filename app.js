const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.static("public"));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

const indexRouter= require('./routes/index')

app.use("/", indexRouter);


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => console.log(`Server listen in port ${PORT}\n http://localhost:${PORT}`));