import { Router } from "express";
import taskController from "../controllers/taskController.js";

const rotaTarefa = Router();

rotaTarefa.get("/", taskController.getAllTask);
rotaTarefa.get("/:id", taskController.getTask);
rotaTarefa.post("/", taskController.createTask);
rotaTarefa.put("/:id", taskController.updateTask);
rotaTarefa.delete("/:id", taskController.deleteTask);

export default rotaTarefa;
