import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.next = this.next.bind(this);
    this.fight = this.fight.bind(this);
  }

  next() {
    this.props.parentMethod2();
  }

  fight() {
    this.props.parentMethod();
  }
  render() {
    return (
      <div className="cards-flexbox">
        <div className="cards">
          <img
            src="https://www.podcastscience.fm/wp-content/uploads/2011/12/Untitled.png"
            alt="Avatar"
          />

          <div className="cards-container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>LEVEL 2</p>
          </div>
        </div>
        <div>
          <button onClick={this.next} className="cards-container-buttons">
            X
          </button>
          <button onClick={this.fight} className="cards-container-buttons">
            GO!
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
