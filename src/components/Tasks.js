import React, { Component , useEffect, useState} from "react";
import { FaBeer } from 'react-icons/fa';
import ReactLoading from "react-loading";


export const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    const [pageLoaded, setPageLoaded] = useState(undefined);

    // const addTask = (task) => {
    //     if(!task.text ){
    //         return
    //     }
    //     const newTasks = [task, ..tasks]
    //     setTasks(newTasks)
    // }

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

    console.log(tasks)
    return (
        <>
        {!pageLoaded ? (
          <ReactLoading
            type={"spin"}
            height = {"1000px"}
            width = {"50px"}
          />
        ) : (
         <div>
             {tasks.map(task => {
                 
             })}
         </div>
        )}
      </>
    )
}