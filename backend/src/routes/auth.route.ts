import { Router } from "express";
import { login, logout, signup, updateDetails } from "../controller/auth.controller";
import { loginMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", loginMiddleware, logout);
router.put("/update", loginMiddleware, updateDetails);


export default router;