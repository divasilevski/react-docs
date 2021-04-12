import Clock from "./components/Clock";
import Counter from "./components/Counter";
import Tabs from "./components/Tabs";
import List from "./components/List";
import Input from "./components/Input";

import Calculator from "./components/Calculator/Calculator";

import "./App.css";
import React, { useState } from "react";

import { color, ColorContext } from "./context/color";

function App() {
  const [colorState, changeColor] = useState({ color: color });

  const toggleContext = function () {
    changeColor((state) => ({
      color: state.color === "red" ? "blue" : "red",
    }));
  };

  return (
    <div className="App">
      <ColorContext.Provider value={colorState}>
        <Clock />
      </ColorContext.Provider>

      <Calculator />
      <Counter />
      <Tabs />
      <List />
      <Input />
      <button onClick={toggleContext.bind(this)}>ChangeColor</button>
    </div>
  );
}

export default App;
