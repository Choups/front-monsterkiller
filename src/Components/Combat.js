import React, { Component } from "react";
import "./Combat.css";

class Combat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="combat">
        <p>GREMLINS</p>

        <img
          alt="Gremlins"
          src="https://img2.thejournal.ie/inline/1215319/original/?width=630&version=1215319"
        />
        <p>2500 points</p>

        <div className="combat-groupBtn">
          <button>NEXT</button>
          <p>SCORE</p>
          <button>FIGHT !</button>
        </div>

        <p>IKILLU</p>

        <img
          alt="IKILLU"
          src="https://parade.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-18-at-4.50.26-PM.png"
        />
        <p> 1500 points</p>
      </div>
    );
  }
}

export default Combat;
