import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
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
      let h = new Headers();
      h.append('Content-Type', 'application/json');
      h.append('Authorization', 'Basic ' + window.btoa(this.state.email + ":" +this.state.password));
      let req = new Request('http://localhost:7000/taskReminder/user', {
          method: 'GET',
          headers: h
      });
      fetch(req)
      .then((response)=>{
          if(response.ok){
             // redirect to page
          }else if(response.status == 401){
            alert('Wrong Password or Username Invalid');
          }
          else{
            alert('500: Something Went Wrong');
          }
      });
      this.setState({
        email: '',
        password: ''
      });
    };
    return (
      <section class="vh-100">
      <div class="container-fluid" style={{"height": "calc(100% - 73px)"}}>
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid"
              alt="Sample image"></img>
          </div>
          <div class="col-md-6 col-lg-2 col-xl-3 offset-xl-1">
            <form>
              <div class="form-outline mb-4">
                <input type="email" name="email" onChange ={updateInputValue} value= {this.state.email} class="form-control form-control-lg"
                  placeholder="Enter your email address" />
              </div>
    
              <div class="form-outline mb-3">
                <input type="password" name="password" value= {this.state.password} onChange ={updateInputValue} class="form-control form-control-lg"
                  placeholder="Enter your password"/>
              </div>
    
              <div class="justify-content-between align-items-center text-white">
                <Link to="#!" class="text-warning">Forgot password?</Link>
              </div>
    
              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" class="btn btn-primary btn-lg" onClick={Authenticated}
                  style= {{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
                <p class="text-white small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/"
                    class="text-warning">Sign up</Link></p>
              </div>
    
            </form>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Login;