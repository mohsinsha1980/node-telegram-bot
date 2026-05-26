import { Request, Response } from "express";
import { sendTelegramMessage } from "../services/telegram.service";

async function telegramWebhook(req: Request, res: Response): Promise<void> {
  try {
    const message = req.body.message;

    if (!message || !message.text) {
      res.sendStatus(200);
      return;
    }

    const chatId = message.chat.id;
    const telegramUserId = message.from.id;
    const text = message.text;

    console.log("telegramUserId:", telegramUserId);
    console.log("Received:", text);

    // IMPORTANT:
    // Save chatId against logged-in user

    if (text === "/start") {
      await sendTelegramMessage(
        chatId,
        "✅ You are connected to TableAndFork bot successfully",
      );
    } else {
      await sendTelegramMessage(chatId, "You said: " + text);
    }

    res.sendStatus(200);
  } catch (error) {
    console.error(error);

    res.sendStatus(500);
  }
}

export { telegramWebhook };
