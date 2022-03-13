import React, { Component } from "react";
import { Container } from "react-bootstrap";
import  { useState, useEffect, useRef } from 'react';
import NotFound from "./NotFound"

function Dashboard(props) {
    const [input, setInput] = useState('')

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
        <form className='todo-form' onSubmit={handleSubmit}>
            <div>
                <input
                placeholder='Add a todo'
                value={input}
                name='text'
                className='todo-input'
            />
            <button  className='todo-button'>
            Add todo
            </button>
            </div>
        </form>
    );
 }

export default Dashboard;