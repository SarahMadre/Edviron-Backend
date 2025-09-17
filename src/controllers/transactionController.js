import Order from "../models/Order.model.js";
import OrderStatus from "../models/OrderStatus.model.js";

// Fetch All Transactions
export const fetchAllTransactions = async (req, res) => {
  try {
    const transactions = await OrderStatus.aggregate([
      {
        $lookup: {
          from: "orders", // collection name for Order
          localField: "collect_id",
          foreignField: "_id",
          as: "order_info"
        }
      },
      { $unwind: "$order_info" }, // flatten array
      {
        $project: {
          collect_id: "$_id",
          school_id: "$order_info.school_id",
          gateway: "$order_info.gateway_name",
          order_amount: 1,
          transaction_amount: 1,
          status: 1,
          custom_order_id: "$order_info._id" // if you want a custom ID
        }
      }
    ]);

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch Transactions by School
export const fetchTransactionsBySchool = async (req, res) => {
  try {
    const { schoolId } = req.params;

    const transactions = await OrderStatus.aggregate([
      {
        $lookup: {
          from: "orders",
          localField: "collect_id",
          foreignField: "_id",
          as: "order_info"
        }
      },
      { $unwind: "$order_info" },
      { $match: { "order_info.school_id": schoolId } }, // filter by school
      {
        $project: {
          collect_id: "$_id",
          school_id: "$order_info.school_id",
          gateway: "$order_info.gateway_name",
          order_amount: 1,
          transaction_amount: 1,
          status: 1,
          custom_order_id: "$order_info._id"
        }
      }
    ]);

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Check Transaction Status
export const checkTransactionStatus = async (req, res) => {
  try {
    const { custom_order_id } = req.params;

    const transaction = await OrderStatus.findOne({ collect_id: custom_order_id });

    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });

    res.json({ status: transaction.status, transaction_amount: transaction.transaction_amount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


