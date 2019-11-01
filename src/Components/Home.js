import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IdHunter: ""
        };
        this.click = this.click.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ IdHunter: event.target.value });
    }

    click() {
        this.props.parentMethod(this.state.IdHunter);
    }

    render() {
        return (
            <div className="Home">
                <div>
                    <h1 className="title">
                        WI<span className="off">L</span>D BL
                        <span className="off2">O</span>OD
                    </h1>
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
                            <input
                                onChange={this.handleChange}
                                value={this.state.IdHunter}
                                type="password"
                                name="mdp"
                                placeholder="Enter your password"
                            />
                        </label>
                    </form>
                    <button onClick={this.click}>Let's fight !</button>
                </div>
            </div>
        );
    }
}

export default Home;
