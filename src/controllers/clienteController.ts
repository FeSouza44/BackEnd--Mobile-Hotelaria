import { Request, Response,NextFunction } from "express";

import { createJWT } from "../utils/jwt";
import clienteRepositories from "../repositories/clienteRepositories";

async function createClient(req:Request, res:Response, next:NextFunction){
    const{email, nome, senha, cpf, telefone} = req.body

    if(!email || !nome || !senha || !cpf || !telefone){
        return res.status(400).json({erro: "Incomplete Data"})
    }

    if(email.trim() === "" || nome.trim() === "" || senha.trim() === "" || cpf.trim() === "" || telefone.trim() === ""){
        return res.status(400).json({erro: "Empty Data"})
    }

    try{
        const result = await clienteRepositories.createClient(email, nome, senha, cpf, telefone);
        if(!result) {throw new Error()}

        const cliente = {
            email,
            nome,
            cpf,
            telefone
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({erro: "Could not create an Account"})
    }
}

export default {createClient};
