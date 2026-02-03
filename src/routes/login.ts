import { Router } from "express";
import loginController from "../controllers/loginController";

const routeLogin = Router();

routeLogin.post("/", loginController.createLogin);

export default routeLogin; 