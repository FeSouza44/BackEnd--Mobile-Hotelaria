import { RowDataPacket } from "mysql2";

export type Client = RowDataPacket[] & {

    nome: string;
    email: string;
    senha: string;
    cpf: string;
    telefone: string;
    fk_cargo: 2;
    
}