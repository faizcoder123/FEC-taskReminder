import React, { Component } from "react";
import { Container } from "react-bootstrap";
import  { useState, useEffect, useRef } from 'react';
import NotFound from "./NotFound"
import {Header} from "./Header"
import {AddTask} from "./AddTask"
import {Filters} from './Filters'
import {Tasks} from './Tasks'

function Dashboard(props) {
    const [tasks, setTasks] = useState([])

    const handleSubmit = e => {
      e.preventDefault();
    }
  
    if(sessionStorage.getItem("AuthenticationState") === null){
        const errorMessage = "Authentication ERROR";
        alert(errorMessage)
        return (
        <NotFound errorMessage={errorMessage}/>
        );
    }
    return (
        <div className="dashBoard">
        <Header/>
        <AddTask tasks = {tasks} setTasks = {setTasks}/>
        <Filters/>
        <Tasks/>
        </div>
        
    );
 }

export default Dashboard;