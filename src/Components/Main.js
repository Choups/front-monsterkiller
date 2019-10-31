import React, { Component } from "react";
import "./Main.css";
import Axios from "axios";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.next = this.next.bind(this);
        this.fight = this.fight.bind(this);
    }

    componentDidUpdate(prevProps) {
        // Utilisation classique (pensez bien à comparer les props) :
        if (this.props.propsId !== prevProps.propsId) {
            console.log("ok on est dedans");
            //   this.setState({ IdHunter: this.props.propsId });
            //   this.getScore();
            Axios.get(
                `http://192.168.1.37:8000/monster/show/${Math.floor(
                    Math.random() * (19 - 1)
                ) + 1}`
            )
                .then(response => response.data)
                .then(data => {
                    this.setState({
                        picture: data.picture,
                        name: data.name,
                        level: data.level,
                        score: data.score,
                        description: data.description,
                        id: data.id
                    });
                });
        }
    }

    next() {
        this.props.parentMethod2();
        Axios.get(
            `http://192.168.1.37:8000/monster/show/${Math.floor(
                Math.random() * (19 - 1)
            ) + 1}`
        )
            .then(response => response.data)
            .then(data => {
                this.setState({
                    picture: data.picture,
                    name: data.name,
                    level: data.level,
                    score: data.score,
                    description: data.description,
                    id: data.id
                });
            });
    }

    fight() {
        this.props.parentMethod(this.state.id);
    }
    render() {
        return (
            <div className="cards-flexbox">
                <div className="cards">
                    <img src={this.state.picture} alt="Avatar" />

                    <div className="cards-container">
                        <div className="cards-header">
                            <h4>
                                <b>{this.state.name}</b>
                            </h4>
                            <button className="small-button">
                                lvl {this.state.level}
                            </button>
                        </div>
                        <p>
                            {this.state.description}
                            <br />
                            <br />
                            health: {this.state.score}
                        </p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={this.next}
                        className="cards-container-buttons"
                    >
                        X
                    </button>
                    <button
                        onClick={this.fight}
                        className="cards-container-buttons"
                    >
                        Fight
                    </button>
                </div>
            </div>
        );
    }
}

export default Main;
