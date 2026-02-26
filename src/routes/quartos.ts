import { Router } from "express";
import quartosController from "../controllers/roomController";

const routeRoom = Router();

console.log("Rota de quartos configurada.");

routeRoom.post("/", quartosController.quartosDisponiveis)

export default routeRoom;