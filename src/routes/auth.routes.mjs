import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.mjs";
import {
  register,
  login,
  profile,
} from "../controllers/auth.controller.mjs";

const routes = Router();

routes.post("/api/auth/register", register);
routes.post("/api/auth/login", login);
routes.get("/api/auth/profile", authMiddleware, profile);

routes.post("/api/auth/logout", (req, res) => {
  return res.status(200).send("Logged out successfully");
});

export default routes;
