import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Andi Weber</h1>
        <ul className="header">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="pageContent">

        </div>
      </div>
    );
  }
}

export default App;
