const { Router } = require("express");
const FeedbackController = require("../controllers/FeedbackController");
const axios = require("axios");
const router = new Router();

router.post("/create", FeedbackController.create);
router.get("/get", FeedbackController.getAll);

router.post('/answerCallbackQuery', async (req, res) => {
    try {
        const { callback_query_id, show_alert } = req.body;
        const botToken = process.env.REACT_APP_BOT_TOKEN;

        const url = `https://api.telegram.org/bot${botToken}/answerCallbackQuery`;
        await axios.post(url, {
            callback_query_id,
            show_alert
        });

        res.send('Success');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;