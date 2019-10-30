import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfileOnly: false
    };

    // this.handleProfileOnlyClick = this.handleProfileOnlyClick.bind(this);//
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

        <button className="ButtonsNav">LOGO</button>

        <button className="ButtonsNav">SCORE</button>
      </nav>
    );
  }
}

export default Header;
