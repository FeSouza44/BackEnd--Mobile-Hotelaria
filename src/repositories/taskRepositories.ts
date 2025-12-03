import { resolve } from 'path';
import Task from '../models/taskModel';

    //Array tipada (referenciado o arquivo da)
    const tasks:Task[] = [];

async function getAllTasks() : Promise<Task[] | any> {
    return new Promise((resolve, reject) => {
        return resolve(tasks)
    })
}

   async function getTask(id:Number) : Promise<Task|any> {
    return new Promise((resolve, reject) => {
        const task = tasks.find(t => t.id === id)
        return resolve(task)
    })
}

    async function  createTask(data:Task):Promise<Task> {       
        return new Promise((resolve, reject) => {
            if (!data.name || !data.description)
                {return reject(new Error("Dados Inválidos"))
            }
           const newTask = new Task(data.name, data.description)
           tasks.push(newTask)
           return resolve(newTask)
        })
    }


    async function updateTask(id:number, data:Task): Promise<Task>{
        return new Promise((resolve, reject) => {
            const index = tasks.findIndex(t => t.id === id)
            if (index === -1){
                tasks[index].name = data.name

                return reject (new Error("Tarefa não encontrada"))}
                tasks[index].name = data.name
                tasks[index].description = data.description
                return resolve(tasks[index])
            
        })
    }

    async function deleteTask(id:number): Promise<Task>{
        return new Promise((resolve, reject) => {
            const index = tasks.findIndex(t => t.id === id)
            if(index === -1){ 
                return reject(new Error("Tarefa não localizada"))}
                const [tasksList] = tasks.splice(index, 1)
                return resolve(tasksList)
        })
    }
    export default{
        getAllTasks ,getTask, updateTask, createTask, deleteTask
    }