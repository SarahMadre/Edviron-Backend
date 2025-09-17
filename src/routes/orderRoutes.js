//WEBHOOK POSTMANNN

import express from "express";
import { createPaymentHandler, checkPaymentStatusHandler, webhookHandler } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes
router.post("/create-payment", protect, createPaymentHandler);
router.get("/payment-status/:collect_request_id", protect, checkPaymentStatusHandler);

// Webhook route
// Use raw body parser for webhooks if needed
import bodyParser from "body-parser";

// This ensures raw body is available as req.rawBody
router.post(
  "/webhook",
  bodyParser.raw({ type: "*/*" }),
  (req, res, next) => {
    req.rawBody = req.body;
    next();
  },
  webhookHandler
);

export default router;
