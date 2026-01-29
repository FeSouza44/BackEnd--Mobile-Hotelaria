import { Router } from "express";
import routeTask from "./task";
import { createJWT } from "../utils/jwt";
import { middleware } from "./jwtMiddleware";

const handleRouter = Router();

handleRouter.use("/task", routeTask);
handleRouter.use("/jwt", (req, res) => {
    const payload = {id: 123, nome: "teste", cargo: "cliente"}
    res.json(createJWT(payload))
})
handleRouter.get("/testeJWT", middleware, (req, res) => {
    res.json("Autorizado")
})   


export default handleRouter; 
