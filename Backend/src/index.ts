import Express from "express";
import helmet from "helmet";
import path from "path";
import authRouter from "./router/login-route";

const PORT = process.env.PORT || 3000;
const server = Express();
server.use(helmet());
server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));
server.use(Express.static(path.join(__dirname, "../public")));

server.listen(PORT, () => {
  console.log(`✅ Servidor funcionando em: http://localhost:${PORT}`);
});

server.get("/", (req, res) => {
  console.log("Server iniciado!!!");
  let name = "William";
  let age = 90;
  res.json({ name, age });
});

server.use("/auth", authRouter);
