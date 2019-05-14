import React, { useState } from "react";
import "./App.css";

import Person from "./Person/Person";

function App() {
  const [persons, setPersons] = useState([
    { name: "Max", age: 28 },
    { name: "Manu", age: 29 },
    { name: "Stephanie", age: 26 }
  ]);

  let switchNameHandler = () => {
    setPersons([{ name: "Maximilian" }, ,]);
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      {persons.map(x => (
        <Person name={x.name} age={x.age} key={`key-${x.name}-${x.age}`} />
      ))}
    </div>
  );
}

export default App;
