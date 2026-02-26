import { Request, Response, NextFunction } from "express";
import roomRepository from "../repositories/roomRepository";
import { Room } from "../models/roomModel";

async function quartosDisponiveis(req: Request, res: Response, next: NextFunction) {
    const { inicio, fim, qtdPessoas } = req.body;

    if (!inicio || !fim || !qtdPessoas) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
    }

    try {
        const rooms: Room[] = await roomRepository.getAvaibleRooms(inicio, fim, qtdPessoas);

        if (!rooms || rooms.length === 0) {
            return res.status(404).json({ mensagem: "Nenhum quarto disponível encontrado." });
        }

        const formattedRooms = await Promise.all(rooms.map(async (room) => {
            try {
                const fotos = await roomRepository.searchPhotoById(room.id);
                
                return {
                    id: room.id,
                    nome: room.nome,
                    numero: room.numero,
                    qtd_cama_casal: room.qtd_cama_casal,
                    qtd_cama_solteiro: room.qtd_cama_solteiro,
                    preco: room.preco,
                    fotos: fotos || []
                };
            } catch (photoError) {
                console.error(`Erro ao buscar fotos do quarto ${room.id}:`, photoError);
                return { ...room, fotos: [] };
            }
        }));

        return res.status(200).json(formattedRooms);

    } catch (error) {
        console.error("ERRO NO CONTROLLER:", error);
        return res.status(500).json({ erro: "Erro interno no servidor" });
    }
}

export default {
  quartosDisponiveis
}