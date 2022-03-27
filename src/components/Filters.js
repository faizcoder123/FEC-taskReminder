export const Filters = () => {
    return (

            <div class="d-flex justify-content-end align-items-center mb-4 pt-3 pb-3" style ={{"width": "500px", "float": "right", "position": "relative", "top": "-250px" , "right":"50px"}}>
            <p class="text-light  mb-0 ms-2 me-2">Filter</p>
            <select class="btn btn-info" >
                <option value="1">All Tasks</option>
                <option value="2">Completed Tasks</option>
                <option value="3">Active Tasks</option>
            </select>
            <p class="text-light  mb-0 ms-2 me-2">Sort</p>
            <select class="btn btn-info">
                <option value="1" >Added date</option>
                <option value="2" >Deadline</option>
            </select>
            </div>
  
    )
}