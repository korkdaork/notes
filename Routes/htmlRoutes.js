const app = require("express").Router();
const path = require("path")

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/index.html"))
})

app.get("notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/notes.html"))
})

module.exports = app;