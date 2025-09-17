export const webhookHandler = async (req, res) => {
  try {
    const payload = req.body;
    // store raw payload for audit
    const log = await WebhookLog.create({ raw_payload: payload });

    const info = payload?.order_info || {};
    // Use order_id to find collect_id: if order_id contains order-object-id or custom id.
    let collectId = null;

    // If gateway returned Mongo ObjectId as order_id:
    if (info.order_id && mongoose.Types.ObjectId.isValid(info.order_id)) {
      collectId = info.order_id;
    } else if (info.order_id) {
      // if gateway returns custom_order_id, try to find order
      const order = await Order.findOne({ custom_order_id: info.order_id });
      if (order) collectId = order._id;
    }

    // If still no collect id, try matching by bank_reference or other stored mappings (omitted)
    if (!collectId) {
      // log that we couldn't map — but still return 200 so gateway won't retry spam
      await log.updateOne({ processed: false, notes: "Could not find collect_id for order_id" });
      return res.status(200).json({ message: "Webhook received but order mapping not found" });
    }

    // Upsert OrderStatus by collect_id
    const update = {
      order_amount: info.order_amount,
      transaction_amount: info.transaction_amount,
      payment_mode: info.payment_mode,
      payment_details: info.payemnt_details || info.payment_details,
      bank_reference: info.bank_reference,
      payment_message: info.Payment_message || info.payment_message,
      status: info.status,
      error_message: info.error_message,
      payment_time: info.payment_time ? new Date(info.payment_time) : undefined,
      gateway: info.gateway
    };

    const orderStatus = await OrderStatus.findOneAndUpdate(
      { collect_id: collectId },
      { $set: update },
      { new: true, upsert: true }
    );

    await log.updateOne({ processed: true, notes: `Updated orderStatus ${orderStatus._id}` });

    res.status(200).json({ message: "Webhook processed" });
  } catch (err) {
    console.error("webhook err:", err);
    res.status(500).json({ message: "Webhook processing error" });
  }
};
