const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017", {
});

const connection = mongoose.connection;

connection.on("connected", function () {
  console.log("MongoDB database connection established successfully");
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
