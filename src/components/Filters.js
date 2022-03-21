export const Filters = () => {
    return (

            <div class="d-flex justify-content-end align-items-center mb-4 pt-3 pb-3">
            <p class="text-light  mb-0 ms-2 me-2">Filter</p>
            <select class="btn btn-info" >
                <option value="1">All</option>
                <option value="2">Completed</option>
                <option value="3">Active</option>
                <option value="4">Has due date</option>
            </select>
            <p class="text-light  mb-0 ms-2 me-2">Sort</p>
            <select class="btn btn-info">
                <option value="1" >Added date</option>
                <option value="2" >Due date</option>
            </select>
            </div>
  
    )
}