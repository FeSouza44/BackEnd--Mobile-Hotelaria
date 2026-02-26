import { Router } from "express";
import rotaLogin from "./login";
import { createJWT } from "../utils/jwt";
import { middleware } from "./jwtMiddleware";
import routeRoom from "./quartos";
import routeReserva from "./reserva";

const handlerRouter = Router();

// rotas publicas
handlerRouter.use("/api/client/", rotaLogin);
handlerRouter.use("/api/room", routeRoom)


handlerRouter.use("/api/reserva",routeReserva)

handlerRouter.use("/jwt", (req, res)=>{
    const payload = {
        id: 123,
        nome: "fulano",
        cargo: "cliente"
    }
    res.json(createJWT(payload))
})

// rotas privadas
handlerRouter.get("/testeJWT", middleware, (req, res)=>{
    res.json("passou pelo JWT middleware")
})

export default handlerRouter