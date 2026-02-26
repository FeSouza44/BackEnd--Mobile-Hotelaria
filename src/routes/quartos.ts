import { Router } from "express";
import roomController from "../controllers/roomController";

const rotaQuartos = Router();

rotaQuartos.post("/", roomController.disponiveis);

export default rotaQuartos;