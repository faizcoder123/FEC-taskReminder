import React, { Component } from "react";
import { Container } from "react-bootstrap";

class NotFound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
      <div class="container">
      <div class="row">
          <div class="col-md-12">
              <div class="error-template" style={{"padding": "40px 15px","text-align":"center"}}>
                  <h1>
                      Oops!</h1>
                  <h2>
                  {this.props.errorMessage}</h2>
                  <div class="error-details">
                      Sorry, an error has occured, Requested page not found!
                  </div>
                  <div class="error-actions">
                      <a href="/" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                          Take Me Home </a>
                  </div>
              </div>
          </div>
      </div>
      </div>
</Container>
    );
  }
}

export default NotFound;