//WEBHOOK POSTMANN

import { createPayment, checkPaymentStatus } from "../utils/paymentGateway.js";
import WebhookLog from "../models/WebhookLog.js";

// Create Payment
export const createPaymentHandler = async (req, res) => {
  try {
    const { amount, callback_url } = req.body;
    const school_id = process.env.SCHOOL_ID;

    const result = await createPayment(school_id, amount, callback_url);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Check Payment Status
export const checkPaymentStatusHandler = async (req, res) => {
  try {
    const { collect_request_id } = req.params;
    const school_id = process.env.SCHOOL_ID;

    const result = await checkPaymentStatus(school_id, collect_request_id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const webhookHandler = async (req, res) => {
  try {
    let data = req.body;

    // Parse raw buffer if needed
    if (Buffer.isBuffer(req.body)) {
      data = JSON.parse(req.body.toString());
    }

    const { collect_request_id, status, amount } = data;

    // Validate required fields
    if (!collect_request_id || !status) {
      return res.status(400).json({ message: "collect_request_id and status are required" });
    }

    // Optional: check if already processed to prevent duplicates
    const existing = await WebhookLog.findOne({ payment_id: collect_request_id });
    if (existing) {
      return res.status(200).json({ status: "Webhook already processed" });
    }

    // Save to MongoDB
    const log = new WebhookLog(
      {
      payment_id: collect_request_id, // store as payment_id for consistency
      status,
      amount,
      raw_payload: data,
    }
    
  
  );

    await log.save();

    console.log("Webhook received and saved:", data);

    return res.status(200).json({ status: "Webhook received successfully" });
  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(500).json({ status: "Webhook error", message: error.message });
  }
};


