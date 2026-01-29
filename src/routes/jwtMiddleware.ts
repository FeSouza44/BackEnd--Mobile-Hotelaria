import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt";

export function middleware(req:Request, res:Response, next:NextFunction) {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer ")) {res.status(401).json({message : "Token não fornecido"})}
    const token = authHeader?.split(" ")[1]!
    const payload = verifyJwt(token)
    if (payload === undefined) {return res.status(401).json({message: "Token Invalido"})}
    (req as any).payload = payload
    next()
} 