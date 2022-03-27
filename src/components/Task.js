import React, {useState} from 'react';
import '../style/task.css';

const Task = ({task}) => {
    // const [modal, setModal] = useState(false);

    // const toggle = () => {
    //     setModal(!modal);
    // }

    // const updateTask = (obj) => {
    //     updateListArray(obj, index)
    // }

    // const handleDelete = () => {
    //     deleteTask(index)
    // }

    return (
        <div class="card" style={{"width": "18rem"}}>
            <div class="card-header"></div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
            </ul>
      </div>
    );
};

export default Task;