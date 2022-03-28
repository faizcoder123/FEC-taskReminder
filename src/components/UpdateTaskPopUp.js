
 import {updateTaskRequest} from "../helper/updateTaskRequest"
 import  {useEffect} from 'react';
export const UpdateTaskPopUp = ({colour, closePopup, task, setTasks, tasks}) => {

    const isValueEmpty = (value)=>{
      if(value) {
       return false
      }
      return true
    }

    const updateTask = event =>{
      closePopup(event)
      const requestPayload = {
        "subject" : !isValueEmpty(event.target.elements.subject.value) ? (event.target.elements.subject.value) : task.subject,
        "deadline": !isValueEmpty(event.target.elements.deadline.value) ? (event.target.elements.deadline.value + "T00:00:00Z") : task.dead_line,
        "description" : !isValueEmpty(event.target.elements.description.value) ? (event.target.elements.description.value) : task.description,
        "status" : !isValueEmpty(event.target.elements.status.value) ? (event.target.elements.status.value) : task.status,
        "ownerEmail" : sessionStorage.getItem("email")
      }
     
      updateTaskRequest(task.id, requestPayload).then((updatedTask)=>{
        setTasks(tasks.filter((CurrentTask) => { 
          return CurrentTask.id !== task.id
       }),  setTasks([...tasks, updatedTask]))
      
      }
    ).catch(error=>{alert(error)})

      console.log(tasks)
   }

    return (
    <form onSubmit={updateTask}>
      <div class="modal" role="dialog" style={{"width": "19rem", "height": "20rem", "background-color": "white", "border-radius": "10px", "font-family": "Times New Roman", "border": "3px solid #5D93E1",  "display":"inline-block", "margin-left": "-10px", "margin-top": "-5px", "position":"absolute", "padding-bottom": "5px"}}>
      <div class="modal-dialog" style={{"position": "fixed"}}></div>
      <h4 class="modal-title w-100 font-weight-bold" style={{"background-color": colour}}>Update Task</h4>
      
        <div class="md-form mb-5">
        <label >Update Task Subject:</label>
          <input type="text" id="subject" class="form-control validate"/>
        </div>

        <div class="md-form mb-5">
        <label >Update Task Status:</label>
            <select class="btn btn-primary" id="status">
                    <option value="Open">Open</option>
                    <option value="InProgress">InProgress</option>
                    <option value="Completed">Completed</option>
                    <option value="Closed">Closed</option>
            </select>
        </div>

        <div class="md-form mb-4">
        <label>Update Task Description:</label>
          <input type="text" class="form-control validate" id="description"/>
        </div>

        <div class="md-form mb-4">
        <label >Update Task Deadline:</label>
          <input type="date" class="form-control validate" id="deadline"/>
        </div>

      <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closePopup}>Close</button>
      <button type="submit" class="btn btn-primary" style={{"float" : "right"}}>Save changes</button> 
     </div>
    </form>  
)

}