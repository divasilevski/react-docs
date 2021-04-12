import React from "react";

export default class Tabs extends React.Component {
  constructor() {
    super();
    this.state = { tab: "tab1" };
  }

  toggle() {
    this.setState((state) => ({
      tab: state.tab === "tab1" ? "tab2" : "tab1",
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle.bind(this)}>Переключить табы</button>
        {
          this.state.tab === 'tab1'
          ? <p>Контент первого таба</p>
          : <p>Контент второго таба</p>
        }
      </div>
    );
  }
}
