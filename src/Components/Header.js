import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.clickToMain = this.clickToMain.bind(this);
    this.clickToProfil = this.clickToProfil.bind(this);
  }
  clickToMain() {
    this.props.parentMethod();
  }

  clickToProfil() {
    this.props.parentMethod2();
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

        <button className="ButtonsNav">SCORE</button>
      </nav>
    );
  }
}

export default Header;
