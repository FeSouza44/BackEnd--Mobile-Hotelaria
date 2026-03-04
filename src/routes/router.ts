import { Router } from "express";
import rotaLogin from "./login";
// import { middleware } from "./jwtMiddleware";
import rotaQuartos from "./quartos";
import rotaReservas from "./reserva";
import { middleware } from "./jwtMiddleware";

const handlerRouter = Router();

// rotas publicas
handlerRouter.use("/api/login", rotaLogin);
handlerRouter.use("/api/quartosDisponiveis", rotaQuartos);
// handlerRouter.use("/api/reserva", rotaReservas);

// rotas privadas
handlerRouter.use("/api/reserva", middleware, rotaReservas);
// handlerRouter.use("/api/reserva", middleware, rotaReservas);


export default handlerRouter