import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    userInvalid: false,
    email: "",
    password: ""
  }
  render() {
    const updateInputValue = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      });
    }
    const Authenticated = () => {
      fetch('http://localhost:7000/taskReminder/user',{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
         body: JSON.stringify({
            username: this.state.email,
            password: this.state.password
        })})
      .then((response) => {if(response.ok) {
        return response.json()
      }
      else{
        throw new Error('Something went wrong');
      }}).then(userResponse => {
          console.log(userResponse)
          localStorage.setItem('user', JSON.stringify(userResponse));
          window.location.href = "/dashboard";
      }).catch( () => {
        this.setState({
          userInvalid : true
        })
       }
      )
      this.state.email= ""
      this.state.password= ""
    };
    return (
      <>
      <div class="container">
      <div class="row">
          <div class="col-md-6 offset-md-3 d-flex p-2">
            <div class="mt-5 border p-3 bg-light shadow ">
                <h4 class="mb-5 text-secondary">Login Your Account</h4>
                <h4 class="text-danger col-md-10">{this.state.userInvalid ? "Invalid Input Or User Not Found": ""}</h4>
                <div class="row">  
                    <div class="mb-3 col-md-7">
                        <label>E-mail<span class="text-danger">*</span></label>
                        <input type="text" name="email" value = {this.state.email} class="form-control" placeholder="Enter e-mail" onChange={updateInputValue} />
                    </div>
                    <div class="mb-3 col-md-7">
                        <label>Password<span class="text-danger">*</span></label>
                        <input type="password" name="password" value = {this.state.password} class="form-control" placeholder="Enter Password" onChange={updateInputValue}/>
                    </div>
                    <div class="col-md-12">
                        <button class="btn btn-primary " onClick={()=>{Authenticated()}}>Log In</button>
                    </div>
                    <p class="text-center mt-3 text-secondary">If you don't have an account, Please <Link class="col-md-12" to="/"> Signup </Link></p>
                </div>
            </div>
          </div>
       </div>
      </div>
    </>
    );
  }
}

export default Login;