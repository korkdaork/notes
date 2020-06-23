const app = require("express").Router();

app.get("/notes", (req, res) => {
    store
        .getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
});

app.post("/notes", (req, res) => {
    store
        .addNote()
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
});

app.delete("/notes", (req, res) => {
    store
        .removeNote()
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
});

module.exports = app;