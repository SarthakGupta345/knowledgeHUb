import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(express.urlencoded({
    extended: true,
    limit: "50kb"
}))

app.get("/", (req, res) => {
    res.send("Hello TypeScript");
});some changes

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});