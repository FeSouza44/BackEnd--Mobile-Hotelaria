//import { Request, Response, NextFunction } from "express";
import express from "express";
import router from "./routes/task";

const app = express();
app.use(express.json());
app.use("/task", router);

export default app;

/* Rotas
  //Rota parâmetros - /body
  app.get("/body", (req: Request, res: Response, next: NextFunction) => {
    const name = req.body.name;
    console.log("Rota de Body - Cliente Digitou: ", name);
    res.send(`Você digitou o nome: ${name}`);
  });

  //Rota Parâmetro - /params/seuNome
  app.get("/params/:name", (req: Request, res: Response, next: NextFunction) => {
    const name = req.params.name;
    console.log("Rota de Params - Cliente Digitou: ", name);
    res.send(`Você digitou o nome: ${name}`);
  });

  //Rota Query - /query?nome=seuNome
  app.get("/query", (req: Request, res: Response, next: NextFunction) => {
    const name = req.query.name;
    console.log("Rota de Query - Cliente Digitou: ", name);
    res.send(`Você digitou o nome: ${name}`);
  });

  //Rota Exemplo - /example
  app.get("/example", (req: Request, res: Response, next: NextFunction) => {
    console.log("aconteceu algo!!!!!");
    res.send("Rodou, tu é brabo!");
  });
*/
