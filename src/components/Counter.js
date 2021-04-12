import React from "react";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  counterAdd() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  counterRemove() {
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.counterAdd.bind(this)}>+</button>
        <button onClick={this.counterRemove.bind(this)}>-</button>
      </div>
    );
  }
}
