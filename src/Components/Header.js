import React, { Component } from "react";
import "./Header.css";
import Axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: "?",
      IdHunter: null
    };

    this.clickToMain = this.clickToMain.bind(this);
    this.clickToProfil = this.clickToProfil.bind(this);
    this.clickToDeconnect = this.clickToDeconnect.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }
  componentDidUpdate(prevProps) {
    // Utilisation classique (pensez bien à comparer les props) :
    if (this.props.propsId !== prevProps.propsId) {
      //   this.setState({ IdHunter: this.props.propsId });
      //   this.getScore();
      Axios.get(`http://192.168.1.37:8000/hunter/show/${this.props.propsId}`)
        .then(response => response.data)
        .then(data => {
          console.log(data);
          this.setState({
            score: data.hunter.score,
            IdHunter: this.props.propsId
          });
        });
    }
  }

  updateScore(propsId) {
    this.setState({ IdHunter: propsId });
  }

  clickToMain() {
    this.props.parentMethod();
  }

  clickToProfil() {
    this.props.parentMethod2();
  }

  clickToDeconnect() {
    this.props.parentMethod3();
  }

  render() {
    return (
      <nav className="NavBlock">
        <button className="ButtonsNav" onClick={this.clickToProfil}>
          USER
        </button>

        <button className="ButtonsNav" onClick={this.clickToMain}>
          LOGO
        </button>

        <button className="ButtonsNav">{this.state.score}</button>
        <button onClick={this.clickToDeconnect}>DECONNEXION</button>
      </nav>
    );
  }
}

export default Header;
