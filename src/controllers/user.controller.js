import User from "../models/user.model.js";
import { asyncHandler } from "../middlewares/error.middleware.js";


export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ success: false, message: "Email already registered" });
  }

  const user = await User.create({ name, email, password });
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: { id: user._id, name: user.name, email: user.email },
  });
});
