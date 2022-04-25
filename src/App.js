/** @format */
import React, { Component } from "react";
import "./App.css";
//import Operators from "./components/operators";
import { Col, Container, Row, Stack } from "react-bootstrap";
import ArithmeticComponent from "./components/arithmeticComponent";
import Screen from "./components/screen";

class App extends React.Component {
  state = {
    operators: {
      topOperators: ["C", "Mod", "<"],
      numbers: ["%", ".", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    sideOperators: ["/", "*", "-", "+", "="],
    output: "",
    userInputs: [],
  };

  getValue = (value) => {
    if (value == "=" || value == "C" || value == "<") {
      //this.state.output = value;
      if (value == "=") this.equalTo();
      else if (value == "C") this.clearscreen();
      else this.clearLastEntry();
    } else {
      this.setState({ output: this.state.output + value.toString() }, () => {
        console.log(this.state.output);
      });
    }
  };

  equalTo = () => {
    const { output, userInputs } = this.state;
    // console.log(userInputs, "hahah", output, "ok", typeof (userInputs, output));
    let userInput;
    this.state.userInputs.push(Array.from(output));
    this.setState({ userInput: this.userInputs });
    // let splitChar = userInput.isEnumerable();
    console.log(this.state.userInputs.propertyIsEnumerable());
    console.log(
      "spliting output values into chars",
      userInput,
      typeof userInput
    );
  };

  clearscreen = () => {
    let clearedScreen = (this.state.output = "");
    this.setState({ output: clearedScreen });
  };

  clearLastEntry = () => {
    console.log("clearscreen worls");
    let arr = Array.from(this.state.output);
    arr.pop();

    console.log(arr, typeof arr);
    // this.state.output = arr
    this.setState({ output: arr }, () => {
      console.log(this.state.output);
    });
  };

  renderRow() {
    return Object.values(this.state.operators).map((value) =>
      value.map((v) => (
        <ArithmeticComponent
          input={this.getValue}
          key={v}
          operator={v}
          value={v}
        />
      ))
    );
  }

  render() {
    return (
      <React.Fragment className="main-Container">
        <Stack direction="horizontal" gap={0.5} className="main-Container">
          <Container>
            <Row>{this.renderRow()}</Row>
          </Container>

          <div
            className="sideOperators"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div>
              {this.state.sideOperators.map((Operator, index) => (
                <ArithmeticComponent
                  key={index}
                  input={this.getValue}
                  // operator={Operator}
                  value={Operator}
                />
              ))}
            </div>
          </div>
        </Stack>
        {}
        <Screen outp={this.state.output} />
      </React.Fragment>
    );
  }
}

export default App;
