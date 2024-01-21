const fs = require("fs");
const path = require("path");

// exporta todas as rotas criadas dentro de controller
module.exports = (app) => {
  fs.readdirSync(__dirname)
    .filter((file) => file.indexOf(".") !== 0 && file !== "index.js")
    .forEach((file) => require(path.resolve(__dirname, file))(app));
};
