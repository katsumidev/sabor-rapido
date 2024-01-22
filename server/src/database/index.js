const mongoose = require("mongoose");

// conexão com o mongo
mongoose.connect("mongodb://localhost:27017/sabor-rapido", {});

const connection = mongoose.connection;

connection.on("connected", function () {
  console.log("MongoDB database connection established successfully");
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
