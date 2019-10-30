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
    this.state = {
      header: "hiddenComponent",
      home: "show-100",
      main: "hiddenComponent",
      combat: "hiddenComponent",
      profil: "hiddenComponent"
    };
  }

  render() {
    return (
      <div className="App">
        <div className={this.state.header}>
          <Header />
        </div>
        <div className={this.state.home}>
          <Home />
        </div>
        <div className={this.state.main}>
          <Main />
        </div>
        <div className={this.state.combat}>
          <Combat />
        </div>
        <div className={this.state.profil}>
          <Profil />
        </div>
      </div>
    );
  }
}

export default App;
