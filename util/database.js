const Sequelize = require("sequelize");

const sequelize = new Sequelize("node", "root", "Bunnyram@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
