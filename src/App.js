import React, { useState } from "react";
import Counter from "./Counter";
import List from "./List";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState([]);

  function addNumber(num) {
    if (!numbers.includes(num)) {
      setNumbers([...numbers, num]);
    }
  }

  return (
    <div className="app">
      <h1>RAIQA Health Assignment</h1>
      <Counter addNumber={addNumber} />
      <List numbers={numbers} setNumbers={setNumbers} />
    </div>
  );
}

export default App;