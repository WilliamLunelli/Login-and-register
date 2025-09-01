import { Request, Response } from "express";
import { authService } from "../service/login-service";

export const LoginController = (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = authService.login(email, password);

  if (!result.success) {
    return res.status(401).json({
      message: "Credencias inválidas",
    });
  }

  return res.json({
    message: "Login bem sucedido!",
    user: result.user,
  });
};
