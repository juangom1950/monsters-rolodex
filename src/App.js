import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

// With class components we have access to "state"
//If I'm extending from some other class component I want to pull in all of their methods and all of their functionality.
//It allows our class component to have access to this cycle components
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };

    //  bind is a method on any function that returns a new function where the
    // context of this is set to whatever we passed to it
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      //Gives us the response in a json format and convert it to javascript, so we can work with it
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  //Arrow function bind "this" context to the place where they were defined in the 1st place.
  //Which is our App component in this case
  //A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  //Everytime that we change the state, the component will be re-render to reflect that changein the DOM
  render() {
    //I need to get the things from the state like this
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        {/*Any parameter that we pass through here is going to be to the props */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
