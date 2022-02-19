/** @format */

import React, { Component } from "react";
//import { Button } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class Operators extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Button
          variant="outline-secondary"
          style={{ margin: 20 }}
          value={this.props.operator}
        >
          {this.props.operator}
        </Button>{" "}
      </React.Fragment>
    );
  }
}

export default Operators;
