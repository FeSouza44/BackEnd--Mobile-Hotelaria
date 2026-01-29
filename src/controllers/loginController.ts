import { Request, Response, NextFunction } from "express";

async function createLogin(req:Request, res:Response, next:NextFunction){
  try{
    console.log("Login effue successfully")
    return res.status(201)
  }catch(error){
    console.log("Error creating login", error)
    return res.status(400).json({erro: "Dados incompletos"})
  }
}

export default {createLogin};