import express from "express";
import helmet from "helmet";
import cors from "cors";
import authRouter from "./router/login-route.js";

const FRONT_ORIGINS = ["http://localhost:3000", "http://127.0.0.1:3000"];

const PORT = process.env.PORT || 3001;
const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(
  cors({
    origin: FRONT_ORIGINS,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

server.get("/", (_req, res) => {
  res.json({ ok: true, service: "backend-login", ts: Date.now() });
});

server.use("/auth", authRouter);

server.listen(PORT, () => {
  console.log(`✅ Backend em: http://localhost:${PORT}`);
});
