import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors({
    origin: [
        "https://batch18-hackathon-fronten-2zda.vercel.app",
        "http://localhost:5173"
    ],
    credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => res.json({ success: true, message: "API is running 🚀" }));

app.use("/api/users", userRoutes);

app.use(errorHandler);

export default app;
