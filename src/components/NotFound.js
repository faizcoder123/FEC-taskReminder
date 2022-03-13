import React, { Component } from "react";
import { Container } from "react-bootstrap";

class NotFound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <h1>{this.props.errorMessage}</h1>
      </Container>
    );
  }
}

export default NotFound;