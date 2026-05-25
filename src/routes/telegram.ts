import express, { Router } from "express";
import { telegramWebhook } from "../controllers/telegram.controller";

const router: Router = express.Router();

router.post("/webhook", telegramWebhook);

export default router;
