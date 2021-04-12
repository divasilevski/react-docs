import React from "react";
import { ColorContext } from "../context/color";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2 style={{ color: this.context.color }}>
          Сейчас {this.state.date.toLocaleTimeString()}.
        </h2>
      </div>
    );
  }
}

Clock.contextType = ColorContext;
