import React from "react";

export default class Calculator extends React.Component {
  render() {
    return (
      <div>
        <input value={this.props.value} readOnly></input>
      </div>
    );
  }
}
