import React from "react";
import "./App.css";

import Person from "./Person/Person";

export default class App extends React.Component {

  constructor(props) {
    super(props) 
      this.state = {
        persons : [
          { name: "Max", age: 28 },
          { name: "Manu", age: 29 },
           { name: "Stephanie", age: 26 }
          ]
      }
    }
     

render () {

  const switchNameHandler = () => {
    this.setState({
      persons : [
        { name: "Maximilian", age: 56 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 28 }
        ]
    })
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      {this.state.persons.map(x => (
        <Person name={x.name} age={x.age} key={`key-${x.name}-${x.age}`} switchNameHandler={this.switchNameHandler}/>
      ))}
    </div>
  )}
}

