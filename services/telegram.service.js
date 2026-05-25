const axios = require("axios");

const telegramApi = axios.create({
  baseURL: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/`,
});

async function sendTelegramMessage(chatId, text) {
  try {
    const response = await telegramApi.post("sendMessage", {
      chat_id: chatId,
      text,
      parse_mode: "HTML",
    });

    console.log("Telegram response:", response.data);

    return response.data;
  } catch (error) {
    console.log("Telegram Error:", error.response?.data || error.message);
  }
}

module.exports = {
  sendTelegramMessage,
};
