import React, { useState } from 'react';
import {addTaskRequest} from "../helper/addTaskRequest"

export const AddTask = ({tasks, setTasks}) => {

    const handleSubmit = event =>{
      event.preventDefault()
      addTaskRequest( {
        "subject" : event.target.elements.task.value,
        "deadline": event.target.elements.deadline.value + "T00:00:00Z",
        "description" : event.target.elements.taskDescription.value,
        "ownerEmail" : sessionStorage.getItem("email")
      }).then((taskAdded)=>{ setTasks([...tasks, taskAdded])}).catch(error=>{alert(error)})
    }

    return (
    <form  style ={{"width": "500px", "position": "relative" , "left":"10px", "top" : "-10px", "font-family": "Lucida Console"}} onSubmit={handleSubmit}>
      <label for="html" class="text-dark wow fadeInUp">Add Task:</label>
    <div className="form-group" style ={{"width": "700px" }}>
      <input style ={{"border": "3px solid #5D93E1"}} type="text" className="form-control" id="task" aria-describedby="emailHelp" placeholder="Add Task..." />
    </div>
    <label for="html" class="text-dark wow fadeInUp">Add Description:</label>
    <div className="form-group" style ={{"width": "700px"}}>
      <input style ={{"border": "3px solid #5D93E1"}} type="text" className="form-control" id="taskDescription" placeholder="Add Task Description..." />
    </div>
    <div className="form-group" style ={{"width": "700px"}}>
    <label for="html" class="text-dark wow fadeInUp">Add Deadline:</label>
      <input type="date" className="form-control" id="deadline"  style ={{"border": "3px solid #5D93E1"}}/>
    </div>
    <button style ={{"top":"-170px", "position": "relative" , "left":"750px"}} type="submit" className="btn btn-info" >Create Task</button>
  </form>
    )
}