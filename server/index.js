const express = require("express");
const cors = require("cors");
const router = require("./routers/index");
require("dotenv").config();
const PORT = process.env.REACT_APP_SERVER_PORT || 5000;
const app = express();
const sequelize = require("./database"); // підключення бд

app.use(express.json());
app.use(cors());
app.use("/api", router); // роутер для маршрутизації по серверу

app.get("/api/data", (req, res) => {
  console.log("Request received");
  db.all("SELECT * FROM your_table", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: err.message });
      return;
    }
    console.log(rows); // Log the rows fetched from the database
    res.json(rows);
  });
});

const start = async () => {
  try {
    await sequelize
      .authenticate()
      .then(() => {
        console.log("Підключення до бази успішне!");
      })
      .catch((error) => {
        console.error("Помилка підключення до бази:", error);
      });
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on PORT = ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
