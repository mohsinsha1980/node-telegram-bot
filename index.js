require("dotenv").config();

const express = require("express");

const telegramRoutes = require("./routes/telegram");

const app = express();

app.use(express.json());

app.use("/telegram", telegramRoutes);

app.listen(4040, () => {
  console.log("Server running on port 4040");
  sendTestMessage();
});

async function sendTestMessage() {
  const { sendTelegramMessage } = require("./services/telegram.service");

  const htmlMessage = `
  <b>Hello <i>Rajesh</i>  👋</b>
You are successfully onboarded 👍

Your order has been <u>successfully placed</u>.
<b>Items:</b>
• Pizza
• Burger

<a href="https://example.com">View Order</a>
`;
  // await sendTelegramMessage("7443019493", htmlMessage, "Mohsin"); //7443019493 = mohsin
  // await sendTelegramMessage("1392132707", htmlMessage, "Rashee"); //1392132707 = rashee
  // await sendTelegramMessage("1057925473", htmlMessage, "Vaibhav"); //1057925473 = vaibhav
  await sendTelegramMessage("8730608762", htmlMessage, "Vaibhav"); //8730608762 = Rajesh
}
