const app = require("express").Router();

app.get("/api/notes", (req, res) => {
    store
        .getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(404).json(err));
});

app.post("/api/notes", (req, res) => {
    store
        .addNote()
        .then((note) => res.json(note))
        .catch((err) => res.status(404).json(err));
});

app.delete("/api/notes", (req, res) => {
    store
        .removeNote()
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(404).json(err));
});

module.exports = app;