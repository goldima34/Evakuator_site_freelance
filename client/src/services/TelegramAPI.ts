import axios from "axios";

export const sendMessageToTelegram = async (data: any) =>{
    try {
        const botToken = '7193262154:AAFBS0GhIXqkoNDVa-5PARIe2QVOOB1Vgu4'
        const chatId = '-1002066100377'

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