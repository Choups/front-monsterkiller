import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfileOnly: false
    };

    this.clickToMain = this.clickToMain.bind(this);
  }
  clickToMain() {
    this.props.parentMethod();
  }

  handleProfilOnlyClick = () => {
    this.setState({ showProfileOnly: !this.state.showProfileOnly });
  };

  render() {
    return (
      <nav className="NavBlock">
        <button className="ButtonsNav" onClick={this.handleProfileOnlyClick}>
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
