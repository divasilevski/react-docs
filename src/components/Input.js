import React from "react";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  input(event) {
    const value = event.target.value;
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <input onInput={this.input.bind(this)} value={this.state.value} />
        <input onInput={this.input.bind(this)} value={this.state.value} />
      </div>
    );
  }
}
