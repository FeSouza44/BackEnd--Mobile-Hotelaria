import { Request, Response, NextFunction } from "express";

function getAllTask(req:Request, res:Response, next:NextFunction) {
  res.send("Pegar todas as tarefas");
}

function getTask(req:Request, res:Response, next:NextFunction) {
  res.send("Pegar uma tarefa");
}

function createTask(req:Request, res:Response, next:NextFunction) {
  res.send("Cadastrar uma tarefa");
}

function updateTask(req:Request, res:Response, next:NextFunction) {
  res.send("Atualizar uma tarefa");
}

function deleteTask(req:Request, res:Response, next:NextFunction) {
  res.send("Deletar uma tarefa");
}

export default {
  getAllTask, getTask, createTask, updateTask, deleteTask
}
