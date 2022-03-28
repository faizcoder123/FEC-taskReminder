import {filterTasksRequest} from "../helper/filter"
import  {useState, useEffect} from 'react';
export const Filters = ({setTasks}) => {
    const [searchCriteria, setSearchCriteria] = useState([])
    const [pagination, setPagination] = useState({
        "sortBy": "created_time",
        "sortOrder":"desc",
        "page": 0,
        "perPage": 50
    })

    useEffect(() => {
        filterTasks();
      }, [pagination, searchCriteria]);

      
    const filterTasks = event => {
        filterTasksRequest( {
            "searchCriteria": searchCriteria,
            "pagination":pagination
        }
    ).then((tasks)=>{ setTasks(tasks)}).catch((error)=>{alert(error)});
    }

    const filterTasksByStatus = event =>{
        var today = new Date();
        var curDate= today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2)+'-'+ ("0" +today.getDate()).slice(-2)
        event.preventDefault()
        let statusType = []
        if(event.target.value == "4"){
            statusType = ["inprogress"]
        }
        else if(event.target.value == "5"){
            statusType = ["completed"]
        }
        else if(event.target.value == "6"){
            statusType = ["closed"]
        }
        else if(event.target.value == "3"){
            statusType = ["inprogress", "open"]
        }
        else if(event.target.value == "2"){
            statusType = ["open"]
        }
        let criteria = [{
            "field": "status",
            "operator": "=",
            "values": statusType
        }]
        if(event.target.value == "1"){
            criteria = []
        }
        else if(event.target.value == "7"){
            criteria = [{
                "field": "dead_line",
                "operator": "<",
                "values": [curDate]
            }]
        }
        else{
            criteria = [...criteria, {
                "field": "dead_line",
                "operator": ">",
                "values": [curDate]
            }]
        }
        setSearchCriteria(criteria)
    }

    const sortTasksByTime = event =>{ 
        setPagination({
            "sortBy": event.target.value,
            "sortOrder":"desc",
            "page": 0,
            "perPage": 50
        })
    }

    return (
            <div class="d-flex justify-content-end align-items-center mb-4 pt-3 pb-3" style ={{"width": "500px", "float": "right", "position": "relative", "top": "-235px" , "right":"50px"}}>
            <p class="text-dark  mb-2 ms-5 me-2">Filters</p>
            <select class="btn btn-info" onChange={filterTasksByStatus}>
                <option value="1">All Tasks</option>
                <option value="2">Open Tasks</option>
                <option value="3">Active Tasks</option>
                <option value="4">In Progress Tasks</option>
                <option value="5">Completed Tasks</option>
                <option value="6">Closed Tasks</option>
                <option value="7">Expired Tasks</option>       
            </select>
            <p class="text-dark  mb-2 ms-5 me-2" >Sort</p>
            <select class="btn btn-info" onChange={sortTasksByTime}>
                <option value="created_time" >Created Time</option>
                <option value="dead_line" >Deadline</option>
            </select>
            </div>
  
    )
}