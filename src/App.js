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
    this.goToMain = this.goToMain.bind(this);
    this.goToCombat = this.goToCombat.bind(this);
    this.goToProfil = this.goToProfil.bind(this);
    this.goToNextMonster = this.goToNextMonster.bind(this);
    this.otherMonster = this.otherMonster.bind(this);
    this.randomResult = this.randomResult.bind(this);
    this.goToHome = this.goToHome.bind(this);
  }

  goToHome() {
    this.setState({
      header: "hiddenComponent",
      home: "show-100",
      main: "hiddenComponent",
      combat: "hiddenComponent",
      profil: "hiddenComponent"
    });
  }

  otherMonster() {
    console.log("Ici on va SET STATE un nouveau MONSTRE");
  }
  randomResult() {
    console.log(
      "Ici on va appliquer un algo de calcul de résultat aléatoire entre le user et le monstre"
    );
  }

  goToNextMonster() {
    this.setState({
      header: "show-100",
      home: "hiddenComponent",
      main: "show-90",
      combat: "hiddenComponent",
      profil: "hiddenComponent"
    });
  }

  goToProfil() {
    this.setState({
      header: "show-100",
      home: "hiddenComponent",
      main: "hiddenComponent",
      combat: "hiddenComponent",
      profil: "show-90"
    });
  }
  goToMain() {
    this.setState({
      home: "hiddenComponent",
      header: "show-100",
      main: "show-90",
      combat: "hiddenComponent",
      profil: "hiddenComponent"
    });
  }

  goToCombat() {
    this.setState({
      main: "hiddenComponent",
      combat: "show-90"
    });
  }

  render() {
    return (
      <div className="App">
        <div className={this.state.header}>
          <Header
            parentMethod={this.goToMain}
            parentMethod2={this.goToProfil}
            parentMethod3={this.goToHome}
          />
        </div>
        <div className={this.state.home}>
          <Home parentMethod={this.goToMain} />
        </div>
        <div className={this.state.main}>
          <Main
            parentMethod={this.goToCombat}
            parentMethod2={this.otherMonster}
          />
        </div>
        <div className={this.state.combat}>
          <Combat
            parentMethod={this.goToNextMonster}
            parentMethod2={this.randomResult}
          />
        </div>
        <div className={this.state.profil}>
          <Profil />
        </div>
      </div>
    );
  }
}

export default App;
