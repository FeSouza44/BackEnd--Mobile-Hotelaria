import { Request, Response, NextFunction } from "express";
import reserveRepository from "../repositories/reserveRepository";


async function createRequest(req: Request, res: Response, next: NextFunction) {
    const token = req.payload;
    const {pagamento, quartos} = req.body

    if (!token.id || !pagamento || !quartos) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {

        const RequestData = {
            fk_clientes: token.id,
            pagamento: pagamento
        }

        const pedidoId = await reserveRepository.createRequests(RequestData);
        if (!pedidoId) { throw new Error("Erro ao criar pedido");}

        let result = []

        for (let q of quartos) {
            const reserveId = await reserveRepository.createReserve(pedidoId, q);
            if (!reserveId) {continue}

            result.push({
                ...q,
                reserveId: reserveId,
            });
        }

        console.log(result);

        res.status(201).json({
            message: "Pedido criado com sucesso",
            pedidoId: pedidoId 
        });

    } catch (error) {
        console.error("Error creating reservation:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default {
    createRequest
}