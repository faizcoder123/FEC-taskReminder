import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { checkAuth } from "../helper/AuthenticateUtil";
class Signup extends Component {
   state = {
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    phone: ""
  }
  render() {
    const updateInputValue = (e) => { 
      this.setState({
        [e.target.name] : e.target.value
      });
    }

    const validatePhonenumber = (phone) =>{
      if(phone.length === 10){
        return (true)
        }
      alert("phone no. is not valid");
      return (false);
    }

    const ValidateEmail = (mail) =>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
      {
        return (true)
      }
      alert("You have entered an invalid email address!")
      return (false)
    }

    const validate = () => {
      if(this.state.name === "" || this.state.email === "" || this.state.password === "" || this.state.phone === ""){
        alert("Fields cant be empty")
        return false;
      }
      if(ValidateEmail(this.state.email) == false || validatePhonenumber(this.state.phone) == false) return false;
      if(this.state.password !== this.state.confirmPassword){
         alert('Password did not match with confirm Password');
         return false;
      }
      return true
    }
  
    const registerUser = () => {
      if(validate()){
        let h = new Headers();
        h.append('Content-Type', 'application/json');
        let req = new Request('http://localhost:7000/taskReminder/registerUser', {
            method: 'POST',
            headers: h,
            body: JSON.stringify({"userName": this.state.name, "email": this.state.email, 
                                  "password": this.state.password, "phoneNo": this.state.phone
                                })
        });
        checkAuth(req, this.state.password)
      }
      this.setState({
        email: "",
        password: "",
        name: "",
        confirmPassword: "",
        phone: ""
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
                <input onChange ={updateInputValue} type="name" name="name" value= {this.state.name} id="form3Example3" class="form-control form-control-lg"
                  placeholder="Enter your name" />
              </div>

              <div class="form-outline mb-4">
                <input onChange ={updateInputValue} type="email" name="email" value= {this.state.email} id="form3Example3" class="form-control form-control-lg"
                  placeholder="Enter your email address" />
              </div>

              <div class="form-outline mb-4">
                <input onChange ={updateInputValue} type="phone" name="phone" value= {this.state.phone} id="form3Example4" class="form-control form-control-lg"
                  placeholder="Phone Number" />
              </div>
    
              <div class="form-outline mb-4">
                <input onChange ={updateInputValue} type="password" name="password" value= {this.state.password} id="form3Example4" class="form-control form-control-lg"
                  placeholder="Enter your password" />
              </div>

              <div class="form-outline mb-4">
                <input onChange ={updateInputValue} type="password" name="confirmPassword" value= {this.state.confirmPassword} id="form3Example4" class="form-control form-control-lg"
                  placeholder="Confirm password" />
              </div>
    
              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" class="btn btn-primary btn-lg" onClick={registerUser}
                  style= {{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Signup</button>
                <p class="text-white small fw-bold mt-2 pt-1 mb-0">If you already have an account, Please <Link to="/login"
                    class="text-warning">Sign in</Link></p>
              </div>
    
            </form>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Signup;