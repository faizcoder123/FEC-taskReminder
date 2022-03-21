import React, { Component } from "react";
import { FaBeer } from 'react-icons/fa';

export const Header = () => {

    return (
        <header>

        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="text-light nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="text-light nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
        <div class="view intro-2">
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