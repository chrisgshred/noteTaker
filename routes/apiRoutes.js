const express = require("express");
const notes = require ("../db/db.json");
const fs = require ("fs");
const path = require("path");

module.exports = function (app) {

    app.get("/api/notes", (req, res) => {
        res.json(notes);
    });

    app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        if (notes.length === 0) {
            newNote.id = 1;
          } else {
            let newID = notes[notes.length - 1].id + 1;
            newNote.id = newID;
          }   
          notes.push(newNote); 
          fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function(err) {
              if (err) return console.log(err);
              console.log("success");
              res.json(req.body);
          } );
    });
}

//app.delete("/api/notes/:id")