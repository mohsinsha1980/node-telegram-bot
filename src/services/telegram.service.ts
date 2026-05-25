import axios from "axios";

const telegramApi = axios.create({
  baseURL: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/`,
});

async function sendTelegramMessage(
  chatId: string | number,
  text: string,
): Promise<any> {
  try {
    const response = await telegramApi.post("sendMessage", {
      chat_id: chatId,
      text,
      parse_mode: "HTML",
    });

    console.log("Telegram response:", response.data);

    return response.data;
  } catch (error: any) {
    console.log("Telegram Error:", error.response?.data || error.message);
  }
}

export { sendTelegramMessage };
