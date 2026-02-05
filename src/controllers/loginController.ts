import { Request, Response, NextFunction } from "express";
import loginRepositories from "../repositories/loginRepositories";
import { validatePassword } from "../utils/senha";
import { createJWT } from "../utils/jwt";

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

    const isValidPassword = await validatePassword(senha, result.senha);
    if(!isValidPassword){throw new Error()}

    const {senha: _senha, ...usuario} = result;
    
    const token = createJWT(usuario);

    return res.status(201).json({token});

  } catch(error){
    console.log(error);
    return res.status(400).json({erro: "Credenciais Invalidas"})
  }
}

export default {createLogin};