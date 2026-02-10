import { Router } from "express";
import loginController from "../controllers/clienteController"

const rotaLogin = Router();

rotaLogin.post("/", loginController.loginCliente)
rotaLogin.post("/cadastro", loginController.cadastroCliente)

export default rotaLogin;