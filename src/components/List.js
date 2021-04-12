import React from "react";

export default class List extends React.Component {
  constructor() {
    super();

    this.state = { list: [1, 2, 3, 4, 5] };
  }

  render() {
    const list = this.state.list
      .filter((el) => el % 2)
      .map((el) => <div key={el.toString()}>{el}</div>);

    return <div>{list}</div>;
  }
}
