const express = require("express");
const mongoose = require("mongoose");
// const Place = require("./models/Place");

const app = express();

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/airbub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// Connection check for mongoDB
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Use routes
app.use(require("./routes/api.js"));
app.use(require("./routes/views.js"));

// Listen on the PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

