import React, {useState} from 'react';
import '../style/task.css';
import { FaEdit } from 'react-icons/fa';
import {AiFillDelete } from 'react-icons/ai';


const Task = ({task, index}) => {

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

    return (
        <div class="card" style={{"width": "18rem", "background-color": colors[index%5].primaryColor, "border-radius": "10px", "font-family": "Times New Roman", "border": "3px solid #5D93E1"}}>
            <div class="card-header" style={{"font-family": "Lucida Console"}}> <b> TASK {index+1}</b></div>
            <ul class="list-group list-group-flush" >
                <li class="list-group-item"><b>Subject: </b>{task.subject}</li>
                <li class="list-group-item"><b>Status: </b>{task.status}</li>
                <li class="list-group-item"><b>Deadline: </b>{new Date(task.deadline).toDateString()}</li>
                <li class="list-group-item"><b>CreatedAt: </b>{new Date(task.createdTime).toDateString()}</li>
                <li class="list-group-item"><b>Description: </b>{task.description}</li>
                <li class="list-group-item">
                <button class="btn btn-primary"style= {{"float":"left"}}>Edit <FaEdit/> </button>
                <button class="btn btn-danger" style= {{"float":"right"}}>Delete <AiFillDelete/> </button>   
                </li>
            </ul>           
        </div>
    );
};

export default Task;