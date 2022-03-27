export const Filters = () => {
    return (

            <div class="d-flex justify-content-end align-items-center mb-4 pt-3 pb-3" style ={{"width": "500px", "float": "right", "position": "relative", "top": "-235px" , "right":"50px"}}>
            <p class="text-light  mb-2 ms-5 me-2">Filter</p>
            <select class="btn btn-info" style={{"border": "3px solid #5D93E1"}}>
                <option value="1">All Tasks</option>
                <option value="2">Completed Tasks</option>
                <option value="3">Active Tasks</option>
            </select>
            <p class="text-light  mb-2 ms-5 me-2">Sort</p>
            <select class="btn btn-info"  style={{"border": "3px solid #5D93E1"}}>
                <option value="1" >Created Date</option>
                <option value="2" >Deadline</option>
            </select>
            </div>
  
    )
}