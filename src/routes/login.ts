import { Router } from "express";
import clienteController from "../controllers/clienteController";

const rotaLogin = Router();

rotaLogin.post("/", clienteController.loginCliente)
rotaLogin.post("/cadastro", clienteController.cadastroCliente)

export default rotaLogin;