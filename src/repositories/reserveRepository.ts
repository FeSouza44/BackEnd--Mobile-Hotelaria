import {pool} from "../database/database";
import {ResultSetHeader} from "mysql2";

async function createRequests(data:any) {
    const sql = `
        INSERT INTO
            pedidos (fk_clientes, pagamento)
        VALUES
            (?, ?)
    `

    try {
        const [result]= await pool.query<ResultSetHeader>(sql, [
            data.fk_clientes,
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
            reservas (fim, inicio, fk_pedidos, fk_quartos)
        VALUES
            (?, ?, ?, ?)
    `

    try {
        const [result]= await pool.query<ResultSetHeader>(sql, [
            room.dataInicio,
            room.dataFim,
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