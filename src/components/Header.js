import React, { Component } from "react";
import { FaBeer } from 'react-icons/fa';

export const Header = () => {

    return (
        <header >

        <nav class="navbar navbar-expand-lg navbar-dark" style ={{ "position": "relative" , "left":"-30px", "font-family": "sans-serif"}}>
          <div class="container">
              <ul class="navbar-nav mr-auto" >
                <li class="nav-item active">
                  <a class="text-dark nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="text-dark nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
        </nav>
      
        <div class="view intro-2">
          <div class="full-bg-img">
            <div class="mask rgba-indigo-slight flex-center">
              <div class="container">
                <div class="text-dark text-center wow fadeInUp">
                  <h2 style={{"font-family": "Courier New"}}>TASK REMINDER APP</h2>
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </header>
    );
}