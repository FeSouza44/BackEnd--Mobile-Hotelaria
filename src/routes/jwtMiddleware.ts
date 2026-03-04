import {Request, Response, NextFunction} from "express";
import { verifyJwt } from "../utils/jwt";

export function middleware(req:Request, res:Response, next:NextFunction){
    const authHeader = req.headers.authorization
    if ( !authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({mensagem: "Token não fornecido"})
    }
    const token:string = authHeader?.split(" ")[1]!
    const payload = verifyJwt(token)
    if (payload === undefined){
        return res.status(401).json({mensagem: "Token invalido"})
    }
    (req as any).payload = payload;
    next()
}