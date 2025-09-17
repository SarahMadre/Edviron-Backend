// src/routes/transactionRoutes.js
import express from "express";
import {
  fetchAllTransactions,
  fetchTransactionsBySchool,
  checkTransactionStatus
} from "../controllers/transactionController.js";

const router = express.Router();

router.get("/", fetchAllTransactions);                     // GET /api/transactions
router.get("/school/:schoolId", fetchTransactionsBySchool);// GET /api/transactions/school/:schoolId
router.get("/status/:custom_order_id", checkTransactionStatus); // GET /api/transactions/status/:custom_order_id

export default router;


