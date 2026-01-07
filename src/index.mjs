import express from "express";
import dotenv from "dotenv";
dotenv.config(); // MUST be first
import connectDB from "./config/db.mjs";
import authRoutes from "./routes/auth.routes.mjs";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

connectDB(); 

app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
