// Dependencies and create routes
const express = require("express");
var path = require("path");

const Router = express.Router();

// View route exercise page
Router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// View route  stats page
Router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// Export router
module.exports = Router;
