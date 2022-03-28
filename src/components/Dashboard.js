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
        return (
        <NotFound errorMessage={"Authentication ERROR"}/>
        );
    }
    return (
        <div className="dashBoard">
        <Header/>
        <AddTask tasks = {tasks} setTasks = {setTasks}/>
        <Filters setTasks = {setTasks}/>
        <Tasks tasks = {tasks} setTasks = {setTasks}/>
        </div>
        
    );
 }

export default Dashboard;