/** @format */

import React, { Component } from "react";
import {  Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class Operators extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Col xs={4} md={4} p={5}>
          <Button
            variant="outline-secondary"
            style={{ margin: 20 }}
            value={this.props.operator}
            onClick={() => this.props.input(this.props.operator)}
          >
            <h3>{this.props.operator}</h3>
          </Button>{" "}
        </Col>
      </React.Fragment>
    );
  }
}

export default Operators;
