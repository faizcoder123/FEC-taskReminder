import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  render() {
    return (      
    <>
    <body style = {{ backgroundImage: `url(${require("../login-image.png")})`, backgroundRepeat: 'no-repeat'}}>
    <div class="container" >
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="signup-form">
                <form action="" class="mt-5 border p-4 bg-light shadow" >
                    <h4 class="mb-5 text-secondary">Create Your Account</h4>
                    <div class="row">
                        <div class="mb-3 col-md-6">
                            <label>Name<span class="text-danger">*</span></label>
                            <input type="text" name="fname" class="form-control" placeholder="Enter Name"/>
                        </div>

                        <div class="mb-3 col-md-6">
                            <label>E-Mail<span class="text-danger">*</span></label>
                            <input type="text" name="Lname" class="form-control" placeholder="Enter e-mail"/>
                        </div>

                        <div class="mb-3 col-md-12">
                            <label>Password<span class="text-danger">*</span></label>
                            <input type="password" name="password" class="form-control" placeholder="Enter Password"/>
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Confirm Password<span class="text-danger">*</span></label>
                            <input type="password" name="confirmpassword" class="form-control" placeholder="Confirm Password"/>
                        </div>
                        <div class="col-md-12">
                           <button class="btn btn-primary float-end">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
   </div>
   </body>
   <p class="text-center mt-3 text-secondary">If you already have an account, Please <Link class="col-md-12" to="/login"> Login </Link></p>
</>
    );
  }
}

export default Signup;