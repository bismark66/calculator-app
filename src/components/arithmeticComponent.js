/** @format */

import React, { Component } from "react";
import Operators from "./operators";

class ArithmeticComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Operators input={this.props.input} operator={this.props.value} />
        {/* {console.log("componentDIdMount")} */}
      </React.Fragment>
    );
  }
}

export default ArithmeticComponent;
