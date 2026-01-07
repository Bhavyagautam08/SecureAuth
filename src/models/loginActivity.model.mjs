import mongoose from "mongoose";

const loginActivitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  ipAddress: {
    type: String,
    required: true,
  },

  userAgent: {
    type: String,
    required: true,
  },

  loginTime: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("LoginActivity", loginActivitySchema);
