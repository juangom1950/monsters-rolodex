import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

// With class components we have access to "state"
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
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
    //I need to get the things from the state like this
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monsters"
          //This setState is not going to happen inmediatly. It is asynchronous
          //We can use a callback to run the state after setState has finished
          onChange={e =>
            //Here we have the field value stored in our state
            //This causes the component to re-render
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state.searchField)
            )
          }
        />
        {/*Any parameter that we pass through here is going to be to the props */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
