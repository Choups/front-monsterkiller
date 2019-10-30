import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.click = this.click.bind(this);
  }

  click() {
    this.props.parentMethod();
  }

  render() {
    return (
      <div className="Home">
        <div>
          <img
            src="https://pbs.twimg.com/profile_images/662231441439391745/FepAibA6_400x400.png"
            alt="cute monster"
          />
        </div>
        <div>
          <form>
            <label>
              <input
                type="text"
                name="login"
                placeholder="Enter your username"
              />
            </label>
            <label>
              <input type="text" name="mdp" placeholder="Enter your password" />
            </label>
          </form>
          <button onClick={this.click}>Let's fight !</button>
        </div>
      </div>
    );
  }
}

export default Home;
