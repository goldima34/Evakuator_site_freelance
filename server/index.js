const express = require("express");
const cors = require("cors")
const router = require("./routers/index")
require('dotenv').config()
const PORT = process.env.REACT_APP_SERVER_PORT || 4000;
const app = express();
const sequelize = require('./database'); // підключення бд

app.use(express.json())
app.use(cors())
app.use("/api", router); // роутер для маршрутизації по серверу

const start = async () => {
    try {
        await sequelize.authenticate()
            .then(() => {
                console.log('Підключення до бази успішне!');
            })
            .catch(error => {
                console.error('Помилка підключення до бази:', error);
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