import { Request, Response, NextFunction } from "express";
import taskRepositories from "../repositories/taskRepositories";
import Task from "../models/taskModel";

async function getAllTask(req:Request, res:Response, next:NextFunction) {
  const result = await taskRepositories.getAllTasks()
  res.json(result);
}

async function getTask(req:Request, res:Response, next:NextFunction) {
  const {id} = req.params
  let result = await taskRepositories.getTask(parseInt(id))
  const status = result ? 200 : 404
  result = result ? result : ['Tarefa não localizada']
  res.status(status).json(result);
}


async function createTask(req:Request, res:Response, next:NextFunction) {
  const task = req.body as Task
  try{
    const result = await taskRepositories.createTask(task)
    return res.status(201).json(result)
  }catch(error){
  console.log("erro ao criar", error);
  return res.status(400).json({erro:"dados feios"})
  }
}

async function updateTask(req:Request, res:Response, next:NextFunction) {
  const {id} = req.params
  const task = req.body as Task
  try {
    const result = await taskRepositories.updateTask(parseInt(id), task) 
    return res.status(201).json(result)
  }
  catch (error) {
    console.log("Erro ao atualizar tarefa", error)
    return res.status(400).json({erro:"Dados invalidos"})
  }
}

async function deleteTask(req:Request, res:Response, next:NextFunction) {
  res.send("Deletar uma tarefa");
}

export default {
  getAllTask, getTask, createTask, updateTask, deleteTask
}
