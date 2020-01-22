import React, { Component } from "react";
import "./App.css";

// With class components we have access to "state"
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      //Gives us the response in a json format and convert it to javascript, so we can work with it
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  //Everytime that we change the state, the component will be re-render to reflect that changein the DOM
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          // react needs this key to know which datat has changed
          <h1 key={monster.id}> {monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
