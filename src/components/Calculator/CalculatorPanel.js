import React from "react";

export default class Calculator extends React.Component {
  onClick(event) {
    this.props.onChange(event.target.innerText);
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onClick.bind(this)}>1</button>
          <button onClick={this.onClick.bind(this)}>2</button>
          <button onClick={this.onClick.bind(this)}>3</button>
        </div>
        <div>
          <button onClick={this.onClick.bind(this)}>4</button>
          <button onClick={this.onClick.bind(this)}>5</button>
          <button onClick={this.onClick.bind(this)}>6</button>
        </div>
        <div>
          <button onClick={this.onClick.bind(this)}>7</button>
          <button onClick={this.onClick.bind(this)}>8</button>
          <button onClick={this.onClick.bind(this)}>9</button>
        </div>
        <div>
          <button onClick={this.onClick.bind(this)}>+</button>
          <button onClick={this.onClick.bind(this)}>-</button>
          <button onClick={this.onClick.bind(this)}>=</button>
        </div>
      </div>
    );
  }
}
