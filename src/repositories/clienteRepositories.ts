import { pool } from "../database/database";
import { generatePassword } from "../utils/senha";

async function createClient(email: string, nome: string, senha: string,cpf: string, telefone: string) {
    const sql = `INSERT INTO clientes 
    (email, nome, senha, cpf, telefone) 
    VALUES (?,?,?,?,?)`;

    senha = await generatePassword(senha);
    console.log("senha criptografada", senha);
    
    const [result] = await pool.query(sql, [email, nome, senha, cpf, telefone]);
    return result;
}
export default {
    createClient
}
