import { Router } from "express";
import validate from "../middlewares/validate.middleware.js";
import { registerUser } from "../controllers/user.controller.js";
import { registerSchema } from "../validations/user.validation.js";

const userRouter = Router();

userRouter.post("/register", validate(registerSchema), registerUser);

export default userRouter;
