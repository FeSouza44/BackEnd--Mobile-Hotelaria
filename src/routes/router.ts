import { Router } from "express";
import rotaLogin from "./login";
import { middleware } from "./jwtMiddleware";

import rotaQuartos from "./quartos";
import rotaReservas from "./reserva";

const handlerRouter = Router();

// rotas publicas
handlerRouter.use("/api/login", rotaLogin);
handlerRouter.use("/api/quartosDisponiveis", rotaQuartos);

// rotas privadas
handlerRouter.use("/api/reserva", middleware, rotaReservas);


export default handlerRouter