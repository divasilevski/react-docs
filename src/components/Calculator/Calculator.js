import React from "react";
import CalculatorPanel from "./CalculatorPanel";
import CalculatorInput from "./CalculatorInput";

export default class Calculator extends React.Component {
  constructor() {
    super();

    this.state = { value: "" };
  }
  onChange(value) {
    if (value === "=") {
      try {
        const value = eval(this.state.value);
        this.setState((state) => ({ value }));
      } catch (error) {
        this.setState((state) => ({ value: "" }));
      }
    } else {
      this.setState((state) => ({
        value: state.value + value,
      }));
    }
  }

  render() {
    return (
      <div>
        <CalculatorInput value={this.state.value} />
        <CalculatorPanel onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}
