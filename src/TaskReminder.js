import React, { Component } from "react";
import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound"

class TaskReminder extends Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </BrowserRouter>
    );
  }
}

export default TaskReminder;