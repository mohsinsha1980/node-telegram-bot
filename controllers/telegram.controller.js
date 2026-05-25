const { sendTelegramMessage } = require("../services/telegram.service");

async function telegramWebhook(req, res) {
  try {
    const message = req.body.message;

    console.log("Telegram Webhook hit:", req.body);

    if (!message || !message.text) {
      return res.sendStatus(200);
    }

    const chatId = message.chat.id;
    const telegramUserId = message.from.id;
    const text = message.text;

    const start = text.split(" ")[0];
    const id = text.split(" ")[1];

    console.log("Received:", text);

    // IMPORTANT:
    // Save chatId against logged-in user

    console.log("start ", start);
    console.log("id ", id); // this could be the user id

    if (start === "/start") {
      await sendTelegramMessage(chatId, "✅ Telegram connected successfully");
    }

    return res.sendStatus(200);
  } catch (error) {
    console.error(error);

    return res.sendStatus(500);
  }
}

module.exports = {
  telegramWebhook,
};
