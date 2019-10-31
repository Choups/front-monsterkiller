import React, { Component } from "react";
import "./Combat.css";

class Combat extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.click = this.click.bind(this);
        this.rollTheDice = this.rollTheDice.bind(this);
    }
    rollTheDice() {
        this.props.parentMethod2();
    }
    click() {
        this.props.parentMethod();
    }

    render() {
        return (
            <div className="combat">
                <p>GREMLINS</p>

                <img
                    alt="Gremlins"
                    src="https://zupimages.net/up/19/44/00iw.jpg"
                />
                <p>2500 points</p>

                <div className="combat-groupBtn">
                    <button onClick={this.click}>NEXT</button>
                    <p>SCORE</p>
                    <button onClick={this.rollTheDice}>FIGHT !</button>
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
