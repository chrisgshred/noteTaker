const path = require("path");
const express = require("express");

module.exports = function (app) {

    // serves all static files contained in public
    app.use(
        express.static(path.join(__dirname, "../public"), {
            extensions: ["html", "js", "css"]
        })
    );

    // If no matching route is found default to the home page
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};