import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.mjs";
import LoginActivity from "../models/loginActivity.model.mjs";

const saltRounds = 10;

// REGISTER
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return res.status(201).send("User registered successfully");
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Requires full credentials");
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send("Password is invalid");
  }

  const token = jwt.sign(
    { email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  // Non-blocking login activity logging
  try {
    await LoginActivity.create({
      userId: user._id,
      ipAddress: req.ip,
      userAgent: req.headers["user-agent"],
    });
  } catch (err) {
    console.error("Login activity logging failed:", err.message);
  }

  return res.status(200).json({
    message: "User logged in successfully",
    token,
  });
};

// PROFILE
export const profile = async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  if (!user) {
    return res.status(404).send("User not found");
  }

  const { password, ...safeUser } = user.toObject();
  return res.status(200).json(safeUser);
};
