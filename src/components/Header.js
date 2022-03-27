import React, { Component } from "react";
import { FaBeer } from 'react-icons/fa';

export const Header = () => {

    return (
        <header >

        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
              <ul class="navbar-nav mr-auto" style ={{ "position": "relative" , "left":"-40px"}}>
                <li class="nav-item active">
                  <a class="text-light nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="text-light nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
        </nav>
      
        <div class="view intro-2" style ={{ "position": "relative" , "top":"-40px"}}>
          <div class="full-bg-img">
            <div class="mask rgba-indigo-slight flex-center">
              <div class="container">
                <div class="text-light text-center wow fadeInUp">
                  <h2>TASK REMINDER APP</h2>
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </header>
    );
}