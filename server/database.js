const Sequelize = require("sequelize");

module.exports = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: true, // Відключення логування (по бажанню)
});
