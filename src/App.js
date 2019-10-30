import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Profil from "./Components/Profil";
import Combat from "./Components/Combat";
import Home from "./Components/Home";
import Main from "./Components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div className="hiddenComponent">
          <Header />
        </div>
        <div className="show-100">
          <Home />
        </div>
        <div className="hiddenComponent">
          <Main />
        </div>
        <div className="hiddenComponent">
          <Combat />
        </div>
        <div className="hiddenComponent">
          <Profil />
        </div>
      </div>
    );
  }
}

export default App;
