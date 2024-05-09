const FeedbackRouter = require("./FeedbackRouter");
const {Router} = require('express')

const router = new Router()

router.use("/feedback", FeedbackRouter);

module.exports = router