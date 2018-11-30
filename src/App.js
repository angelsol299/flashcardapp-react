import React, { Component } from "react";
import FlasCards from "./components/flashCards";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <FlasCards />
      </div>
    );
  }
}

export default App;
