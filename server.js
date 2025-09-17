// // // // // // // server.js
// // // // // // import express from "express";
// // // // // // import dotenv from "dotenv";
// // // // // // import cors from "cors";
// // // // // // import connectDB from "./src/config/db.js";

// // // // // // dotenv.config();
// // // // // // connectDB();

// // // // // // const app = express();
// // // // // // app.use(cors());
// // // // // // app.use(express.json({ limit: "10mb" }));

// // // // // // // routes
// // // // // // import authRoutes from "./src/routes/authRoutes.js";
// // // // // // import paymentRoutes from "./src/routes/payment.routes.js";
// // // // // // import webhookRoutes from "./src/routes/webhook.routes.js";
// // // // // // import transactionRoutes from "./src/routes/transaction.routes.js";

// // // // // // app.use("/api/auth", authRoutes);
// // // // // // app.use("/api/payments", paymentRoutes);
// // // // // // app.use("/api", webhookRoutes);
// // // // // // app.use("/api", transactionRoutes);

// // // // // // // healthcheck
// // // // // // app.get("/", (req, res) => res.send("School Payment API running"));

// // // // // // // error fallback
// // // // // // app.use((err, req, res, next) => {
// // // // // //   console.error(err);
// // // // // //   res.status(500).json({ message: "Server error" });
// // // // // // });

// // // // // // const PORT = process.env.PORT || 5000;
// // // // // // app.listen(PORT, () => console.log(`Server running on ${PORT}`));


// // // // // // server.js
// // // // // import express from "express";
// // // // // import dotenv from "dotenv";
// // // // // import mongoose from "mongoose";

// // // // // // Import routes from src/routes
// // // // // import authRoutes from "./src/routes/authRoutes.js";
// // // // // import orderRoutes from "./src/routes/orderRoutes.js";
// // // // // // import paymentRoutes from "./src/routes/payment.routes.js";
// // // // // // import transactionRoutes from "./src/routes/transaction.routes.js";
// // // // // // import webhookRoutes from "./src/routes/webhook.routes.js";

// // // // // dotenv.config();

// // // // // const app = express();
// // // // // app.use(express.json());

// // // // // // Routes
// // // // // app.use("/api/auth", authRoutes);
// // // // // app.use("/api/orders", orderRoutes);
// // // // // // app.use("/api/payments", paymentRoutes);
// // // // // // app.use("/api/transactions", transactionRoutes);
// // // // // // app.use("/api/webhooks", webhookRoutes);

// // // // // app.get("/", (req, res) => res.send("API is running..."));

// // // // // // DB + Server
// // // // // const PORT = process.env.PORT || 5000;

// // // // // mongoose
// // // // //   .connect(process.env.MONGO_URI)
// // // // //   .then(() => {
// // // // //     console.log("MongoDB Connected");
// // // // //     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // // // //   })
// // // // //   .catch((err) => console.error("DB connection error:", err));


// // // // import express from "express";
// // // // import dotenv from "dotenv";
// // // // import cors from "cors";
// // // // import connectDB from "./src/config/db.js";

// // // // // Routes
// // // // import authRoutes from "./src/routes/authRoutes.js";
// // // // import orderRoutes from "./src/routes/orderRoutes.js";

// // // // dotenv.config();

// // // // // Validate environment variables
// // // // if (!process.env.MONGO_URI) {
// // // //   console.error("Error: MONGO_URI not set in .env");
// // // //   process.exit(1);
// // // // }

// // // // const app = express();

// // // // // Middleware
// // // // app.use(cors()); // enable CORS for frontend requests
// // // // app.use(express.json({ limit: "10mb" })); // parse JSON bodies

// // // // // Routes
// // // // app.use("/api/auth", authRoutes);
// // // // app.use("/api/orders", orderRoutes);

// // // // // Healthcheck
// // // // app.get("/", (req, res) => res.send("API is running..."));

// // // // // Global error handler
// // // // app.use((err, req, res, next) => {
// // // //   console.error(err.stack);
// // // //   res.status(500).json({ message: "Server error" });
// // // // });

// // // // // Connect DB and start server
// // // // const PORT = process.env.PORT || 5000;

// // // // connectDB()
// // // //   .then(() => {
// // // //     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // // //   })
// // // //   .catch((err) => console.error("Failed to start server:", err));



// // // import express from "express";
// // // import dotenv from "dotenv";
// // // import cors from "cors";
// // // import connectDB from "./src/config/db.js";

// // // import authRoutes from "./src/routes/authRoutes.js";
// // // import orderRoutes from "./src/routes/orderRoutes.js";

// // // dotenv.config();

// // // // Validate env
// // // if (!process.env.MONGO_URI) {
// // //   console.error("Error: MONGO_URI not set in .env");
// // //   process.exit(1);
// // // }

// // // const app = express();

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json({ limit: "10mb" }));

// // // // Routes
// // // app.use("/api/auth", authRoutes);
// // // app.use("/api/orders", orderRoutes);

// // // // Healthcheck
// // // app.get("/", (req, res) => res.send("API running..."));

// // // // Global error handler
// // // app.use((err, req, res, next) => {
// // //   console.error(err.stack);
// // //   res.status(500).json({ message: "Server error" });
// // // });

// // // // DB + server
// // // const PORT = process.env.PORT || 5000;

// // // connectDB().then(() => {
// // //   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // // });





// // //POSTMANNNNNN

// // import express from "express";
// // import dotenv from "dotenv";
// // import cors from "cors";
// // import connectDB from "./src/config/db.js";

// // import authRoutes from "./src/routes/authRoutes.js";
// // import orderRoutes from "./src/routes/orderRoutes.js";

// // dotenv.config();

// // // Validate env
// // if (!process.env.MONGO_URI) {
// //   console.error("Error: MONGO_URI not set in .env");
// //   process.exit(1);
// // }

// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json({ limit: "10mb" }));

// // // Routes
// // app.use("/api/auth", authRoutes);
// // app.use("/api/orders", orderRoutes);

// // // Healthcheck
// // app.get("/", (req, res) => res.send("API running..."));

// // // Global error handler
// // app.use((err, req, res, next) => {
// //   console.error(err.stack);
// //   res.status(500).json({ message: "Server error" });
// // });

// // // DB + server
// // const PORT = process.env.PORT || 5000;

// // connectDB().then(() => {
// //   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // });










// // FETCH TRANSACTIONS

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";

import authRoutes from "./src/routes/authRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";
import transactionRoutes from "./src/routes/transactionRoutes.js"; // <--- Add this

dotenv.config();

// Validate env
if (!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI not set in .env");
  process.exit(1);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/transactions", transactionRoutes); // <--- Add transactions routes

// Healthcheck
app.get("/", (req, res) => res.send("API running..."));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error" });
});

// DB + server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});


