import "dotenv/config";
import express, { Express } from "express";
import telegramRoutes from "./routes/telegram";
import { sendTelegramMessage } from "./services/telegram.service";

const app: Express = express();

app.use(express.json());

app.use("/telegram", telegramRoutes);

app.listen(4040, () => {
  console.log("Server running on port 4040");
  sendTestMessage();
});

async function sendTestMessage(): Promise<void> {
  const htmlMessage = `
  <b>Hello <i>Mohsin</i>  👋</b>
You are successfully onboarded 👍

Your order has been <u>successfully placed</u>.
<b>Items:</b>
• Pizza
• Burger

<a href="https://example.com">View Order</a>
`;
  await sendTelegramMessage("7443019493", htmlMessage); //7443019493 = mohsin
  // await sendTelegramMessage("1392132707", htmlMessage); //1392132707 = rashee
  // await sendTelegramMessage("1057925473", htmlMessage); //1057925473 = vaibhav
  // await sendTelegramMessage("8730608762", htmlMessage); //8730608762 = Rajesh
}
