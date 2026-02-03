import e, { Request, Response, NextFunction } from "express";
import loginRepositories from "../repositories/loginRepositories";

async function createLogin(req:Request, res:Response, next:NextFunction){
  const{email, senha} = req.body
  
  if(!email || !senha){
    return res.status(400).json({erro: "Incomplete Data"})
  }
  if(email.trim() === "" || senha.trim() === ""){
     return res.status(400).json({erro: "Empty Data"})
    }
  try{
    const result = await loginRepositories.validateEmail(email);
    if(!result) {throw new Error()}

    console.log(result.email)
    console.log(result.senha)
    return res.sendStatus(201)

  } catch(error){
    console.log(error);
    return res.status(400).json({erro: "Credenciais Invalidas"})
  }
}

export default {createLogin};