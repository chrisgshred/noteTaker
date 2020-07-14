const path = require("path");

module.exports = function (app) {

// adds route for serving notes html file
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If no matching route is found default to the home page
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};