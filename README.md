1. Start ngrok - (Need https location instead of localhost to run telegram)
   If your localhost is running on port 4040
   ngrok http 4040
   Run above command in the terminal. This will create a https server (e.g. https://ermelinda-unrelented-neely.ngrok-free.dev)
   http://localhost:4040 => https://ermelinda-unrelented-neely.ngrok-free.dev

2. Create a telegram bot
   Open telegram and search for 'BotFather' and open it
   Write "/newbot" then follow the instructions to create a bot
   Once the bot is created, it will give you a API token (e.g. 8959886723:AAFCfePMcu437aCmvVDAztJvbMb1UsoERoA)
   Keep the API token safe in the env file

3. Onboard a user
   Send a link to a user to onboard him/her (e.g. https://t.me/<YOUR_BOT_NAME_bot>?start=<END_USER_ID>)
   Once user clicks this link the connection will be establish between the bot and the user.
   After that an object will be received in the controller which will have chat.id property.
   This chat.id is the identifier of the user where you can send notifications later
