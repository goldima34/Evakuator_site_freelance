const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Feedback = sequelize.define("Feedback", {
    Title: { type: DataTypes.STRING },
    Description: { type: DataTypes.STRING },
});

module.exports = Feedback;