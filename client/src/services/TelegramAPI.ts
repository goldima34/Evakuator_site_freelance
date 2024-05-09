import axios from "axios";
import {string} from "zod";

const botToken = process.env.REACT_APP_BOT_TOKEN || ""
const chatId = process.env.REACT_APP_CHAT_ID || "";

export const sendMessageToTelegram = async (data: any) =>{
    try {
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const message = `Ім'я: ${data.firstName} \nНомер: ${data.phone}`
        console.log(data)
        await axios.post(url, {
            chat_id: chatId,
            text: message,
        });
    } catch (e){
        console.log(e)
    }
}


export const sendFeedbackToTelegram = async (data: any) => {
    try {
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const message = `Ім'я: ${data.firstName} \nВідгук: ${data.feedback}`;

        const keyboard = {
            inline_keyboard: [
                [{ text: 'Подтвердить', callback_data: 'confirm' }],
                [{ text: 'Отклонить', callback_data: 'reject' }]
            ]
        };

        console.log(data)

        const response = await axios.post(url, {
            chat_id: chatId,
            text: message,
            reply_markup: JSON.stringify(keyboard)
        });

        const messageId = response.data.result.message_id;

        const responseReceived = await waitForCallback(botToken, messageId);
        if (responseReceived) {
            console.log(data)
            await axios.post("http://localhost:5000/api/feedback/create", {
                Title: data.firstName,
                Description: data.feedback,
            });
        } else {
            return 'Время ожидания истекло';
        }
    } catch (e) {
        console.log(e);
        return 'Ошибка';
    }
};

const waitForCallback = async (botToken: string, messageId: number) => {
    try {
        let startTime = Date.now();

        while (Date.now() - startTime < 60000) { // ждем ответ 60 секунд
            const updates = await getUpdates(botToken);
            const messageResponse = updates.find((update: any) => {
                return update.callback_query && update.callback_query.message.message_id === messageId;
            });

            if (messageResponse) {
                await handleTelegramCallback(messageResponse.callback_query);
                return true;
            }

            await new Promise(resolve => setTimeout(resolve, 1000)); // ждем 1 секунду перед повторной проверкой
        }

        return false;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const getUpdates = async (botToken: string) => {
    try {
        const updatesUrl = `https://api.telegram.org/bot${botToken}/getUpdates`;
        const response = await axios.get(updatesUrl);
        return response.data.result;
    } catch (e) {
        console.log(e);
        return [];
    }
};

const handleTelegramCallback = async (callbackQuery: any) => {
    try {
        const callbackData = callbackQuery.data;
        const messageId = callbackQuery.message.message_id;

        console.log('Нажатая кнопка:', callbackData);

        const url = 'http://localhost:5000/api/feedback/answerCallbackQuery';
        await axios.post(url, {
            callback_query_id: callbackQuery.id,
            show_alert: true
        });

        const editUrl = `https://api.telegram.org/bot${botToken}/editMessageReplyMarkup`;
        await axios.post(editUrl, {
            chat_id: callbackQuery.message.chat.id,
            message_id: messageId,
            reply_markup: JSON.stringify({ inline_keyboard: [] })
        });
    } catch (error) {
        console.error(error);
    }
};
