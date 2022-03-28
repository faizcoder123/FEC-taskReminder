
export const UpdateTaskPopUp = ({colour, closePopup}) => {

    return (
    
      <div class="modal" role="dialog" style={{"width": "19rem", "height": "20rem", "background-color": "white", "border-radius": "10px", "font-family": "Times New Roman", "border": "3px solid #5D93E1",  "display":"inline-block", "margin-left": "-10px", "margin-top": "-5px", "position":"absolute", "padding-bottom": "5px"}}>
      <div class="modal-dialog" style={{"position": "fixed"}}></div>
      <h4 class="modal-title w-100 font-weight-bold" style={{"background-color": colour}}>Update Task</h4>
      
        <div class="md-form mb-5">
        <label >Update Task Subject:</label>
          <input type="text"  class="form-control validate"/>
        </div>

        <div class="md-form mb-5">
        <label >Update Task Status:</label>
            <select class="btn btn-primary">
                    <option value="1">Open</option>
                    <option value="4">InProgress</option>
                    <option value="5">Completed</option>
                    <option value="6">Closed</option>
            </select>
        </div>

        <div class="md-form mb-4">
        <label>Update Task Description:</label>
          <input type="text" class="form-control validate"/>
        </div>

        <div class="md-form mb-4">
        <label >Update Task Deadline:</label>
          <input type="date" class="form-control validate"/>
        </div>

      <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closePopup}>Close</button>
      <button type="button" class="btn btn-primary" style={{"float" : "right"}}>Save changes</button> 
     </div>
      
)

}