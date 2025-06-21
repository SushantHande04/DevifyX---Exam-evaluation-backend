import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { getProfile, login, logout, register } from "../controllers/user.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.get("/me", isAuthenticated, getProfile);

router.post("/logout", logout);

export {router};