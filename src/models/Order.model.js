import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  school_id: String,
  trustee_id: String,
  student_info: {
    name: String,
    id: String,
    email: String,
  },
  gateway_name: String,
});

export default mongoose.model("Order", orderSchema);
