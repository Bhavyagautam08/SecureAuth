import express from "express";
import dotenv from "dotenv";
// --- NEW IMPORTS ---
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
// -------------------

dotenv.config(); // MUST be first
import connectDB from "./config/db.mjs";
import authRoutes from "./routes/auth.routes.mjs";

const app = express();
const PORT = process.env.PORT || 4000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true, 
  legacyHeaders: false, 
});

app.use(limiter);

app.use(express.json());

app.use(mongoSanitize());

connectDB(); 

app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});