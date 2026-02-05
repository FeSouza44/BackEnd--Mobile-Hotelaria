import { Router } from "express";
import loginController from "../controllers/loginController";
import clienteController from "../controllers/clienteController";

const routeLogin = Router();

routeLogin.post("/", loginController.createLogin);
routeLogin.post("/register", clienteController.createClient);

export default routeLogin; 