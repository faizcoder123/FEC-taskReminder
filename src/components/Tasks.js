import React, { Component , useEffect, useState} from "react";
import { FaBeer } from 'react-icons/fa';
import ReactLoading from "react-loading";
import Task from "./Task"

export const Tasks = ({tasks, setTasks}) => {

    const [pageLoaded, setPageLoaded] = useState(undefined);

    useEffect(() => {
        let h = new Headers();
        h.append('Content-Type', 'application/json');
        h.append('Authorization', 'Basic ' + window.btoa(sessionStorage.getItem("email") + ":" +sessionStorage.getItem("password")));
        let req = new Request('http://localhost:7000/taskReminder/tasks', {
            method: 'GET',
            headers: h
        });
        fetch(req)
        .then(response => response.json())
        .then(data => {
            setTasks(data)
            setPageLoaded(true);
        })
      },[])

    return (
        <>
        {!pageLoaded ? (
          <ReactLoading
            type={"spin"}
            height = {"1000px"}
            width = {"50px"}
          />
        ) : (
          <>
          <h1 class="text-dark" style={{"font-family": "Courier New",}}> Tasks Avilable:</h1>
          <div style={{
            "padding-right": "50px",
            "padding-bottom": "50px",
            "padding-left": "90px",
            "padding-top": "40px",
          }}>
             {tasks.map((task, index) => 
                <Task task = {task} key={task.index} index={index} setTasks={setTasks} tasks={tasks}/>
             )}
          </div>
          </>
        )}
     </>
    )
}