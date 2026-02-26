import { Router } from "express";
import reservaController from "../controllers/reserveController";

const rotaReservas = Router();

rotaReservas.post("/", reservaController.criarPedido);

export default rotaReservas;