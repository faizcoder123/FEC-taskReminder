import React, {useState} from 'react';
import '../style/task.css';
import { FaEdit } from 'react-icons/fa';
import {AiFillDelete } from 'react-icons/ai';
import {deleteTaskRequest} from "../helper/deleteTaskRequest"

const Task = ({task, index, setTasks, tasks}) => {

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const deleteTask = event =>{
        event.preventDefault()
        deleteTaskRequest(task.id).then(()=>{setTasks(tasks.filter((CurrentTask) => { 
            return CurrentTask.id !== task.id
        }))}).catch(error=>{alert(error)})
      }
    console.log(task)

    return (
        <div class="card" style={{"width": "18rem", "background-color": colors[index%5].primaryColor, "border-radius": "10px", "font-family": "Times New Roman", "border": "3px solid #5D93E1",  "display":"inline-block", "margin-left": "10px", "margin-bottom": "10px"}}>
            <div class="card-header" style={{"font-family": "Lucida Console"}}> <b> TASK {index+1}</b></div>
            <ul class="list-group list-group-flush" >
                <li class="list-group-item"><b>Subject: </b>{task.subject}</li>
                <li class="list-group-item"><b>Status: </b>{task.status}</li>
                <li class="list-group-item"><b>Deadline: </b>{new Date(task.dead_line).toDateString()}</li>
                <li class="list-group-item"><b>CreatedAt: </b>{new Date(task.created_time).toDateString()}</li>
                <li class="list-group-item"><b>Description: </b>{task.description}</li>
                <li class="list-group-item">
                <button class="btn btn-primary"style= {{"float":"left"}}>Edit <FaEdit/> </button>
                <button class="btn btn-danger" style= {{"float":"right"}} onClick={deleteTask}>Delete <AiFillDelete/> </button>   
                </li>
            </ul>           
        </div>
    );
};

export default Task;