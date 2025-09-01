import Express from "express";
import helmet from "helmet";
import path from "path";
import authRouter from "./router/login-route";
import cors from "cors";

const FRONT_ORIGINS = ["http://localhost:5173", "http://127.0.0.1:5173"];
const PORT = process.env.PORT || 3000;
const server = Express();

server.use(helmet());
server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));
server.use(Express.static(path.join(__dirname, "../public")));
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
  console.log(`🔓 CORS liberado para: ${FRONT_ORIGINS.join(", ")}`);
});
