const FeedbackModel = require("../models/FeedbackModel");

class FeedbackController {
    // створюємо питання по айді теста
    async create(req, res) {
        try {
            const {Title, Description} = req.body;
            console.log(Description);
            const Feedback = await FeedbackModel.create({
                Title: Title, Description: Description
            });
            return res.json(Feedback)
        } catch (error) {
            console.log(error);
        }
    }

    // видаляємо питання
    async delete(req, res) {
        try {
            const {id} = req.body;
            const Question = await QuestionModel.findOneAndDelete({id: id});
            return res.json(Question);
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(req,res) {
        try {
            const Question = await FeedbackModel.findAll();
            return res.json(Question);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new FeedbackController();