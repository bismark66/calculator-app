/** @format */

import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class Screen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <center
              style={{
                maxWidth: 500,
                margin: "0 auto",
                backgroundColor: "#AEAEAE",
              }}
            >
              <h1>&nbsp;</h1>
            </center>
          </Row>
          <Row>
            <center
              style={{
                maxWidth: 500,
                margin: "0 auto",
                textAlign: "right",
                backgroundColor: "#AEAEAE",
              }}
            >
              <h1>&nbsp;{this.props.outp}</h1>
            </center>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Screen;
