import {pool} from "../database/database";
import {ResultSetHeader} from "mysql2";

async function createRequests(data:any) {
    const sql = `INSERT INTO pedidos (cliente_id, pagamento)
        VALUES (?, ?)`

    try {
        const [result]= await pool.query<ResultSetHeader>(sql, [
            data.cliente_id,
            data.pagamento
        ]);

        return result.insertId;

    } catch (error) {
        console.error("Erro ao criar pedido:", error);
        return null;
    }
}

async function createReserve(idReserve:number, room:any) {
    const sql = `
        INSERT INTO 
            reservas (fim, inicio, pedido_id, quarto_id)
        VALUES
            (?, ?, ?, ?)`

    try {
        const [result]= await pool.query<ResultSetHeader>(sql, [
            room.dataFim,
            room.dataInicio,
            idReserve,
            room.id
        ]);

        return result.insertId;

    } catch (error) {
        console.error("Erro ao criar reserva:", error);
        return null;
    }
}
 
export default {
    createRequests, createReserve
}