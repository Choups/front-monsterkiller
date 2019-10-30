import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cards-flexbox">
        <div class="cards">
          <img
            src="https://www.podcastscience.fm/wp-content/uploads/2011/12/Untitled.png"
            alt="Avatar"
          />

          <div class="cards-container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>LEVEL 2</p>
          </div>
        </div>
        <div>
          <button className="cards-container-buttons">X</button>
          <button className="cards-container-buttons">GO!</button>
        </div>
      </div>
    );
  }
}

export default Main;
