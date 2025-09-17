import mongoose from "mongoose";

const webhookLogSchema = new mongoose.Schema(
  {
    payment_id: { type: String, required: true },
    status: { type: String, required: true },
    amount: { type: Number, required: true },
    raw_payload: { type: Object },
  },
  { timestamps: true }
);

const WebhookLog = mongoose.model("WebhookLog", webhookLogSchema);

export default WebhookLog;
