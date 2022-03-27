import React, { useState } from 'react';

export const AddTask = () => {

    const [input, setInput] = useState("");

    const handleSubmit = e =>{
        e.preventDefault()
        // addTaskRequest({
            
        // })
    }
    const updateInputValue = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }
    return (
        <form  style ={{"width": "500px", "position": "relative" , "left":"10px", "top" : "-10px"}}>
          <label for="html" class="text-light wow fadeInUp">Add Task:</label>
        <div className="form-group" style ={{"width": "700px" }}>
          <input style ={{"border": "3px solid #73AD21"}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add Task..." />
        </div>
        <label for="html" class="text-light wow fadeInUp">Add Description:</label>
        <div className="form-group" style ={{"width": "700px"}}>
          <input style ={{"border": "3px solid #73AD21"}} type="text" className="form-control" id="exampleInputPassword1" placeholder="Add Task Description..." />
        </div>
        <div className="form-group" style ={{"width": "700px"}}>
        <label for="html" class="text-light wow fadeInUp">Add Deadline:</label>
          <input type="date" className="form-control" id="exampleInput"  style ={{"border": "3px solid #73AD21"}}/>
        </div>
        <button style ={{"width": "200px", "margin-top":"10px"}} type="submit" className="btn btn-info">Create Task</button>
      </form>
    )
}