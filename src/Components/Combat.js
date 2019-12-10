import React, { Component } from "react";
import "./Combat.css";
import Axios from "axios";

class Combat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hunterPoint: "?",
            turn: 0
        };

        this.click = this.click.bind(this);
        this.rollTheDice = this.rollTheDice.bind(this);
    }

    componentDidUpdate(prevProps) {
        // Utilisation classique (pensez bien à comparer les props) :
        if (this.props.propsId !== prevProps.propsId) {
            // console.log("ok on est dedans");
            //   this.setState({ IdHunter: this.props.propsId });
            //   this.getScore();
            Axios.get(
                `https://wild-blood.herokuapp.com/hunter/show/${this.props.propsId}`
            )
                .then(response => response.data)
                .then(data => {
                    // console.log(data.fights);
                    this.setState({
                        picture: data.hunter.picture,
                        name: data.hunter.name,
                        level: data.hunter.level,
                        score: data.hunter.score,
                        description: data.hunter.description,
                        fights: data.fights
                    });
                });
        } else if (this.props.propsIdMonster !== prevProps.propsIdMonster) {
            // console.log("ok on est dedans");
            //   this.setState({ IdHunter: this.props.propsId });
            //   this.getScore();
            Axios.get(
                `https://wild-blood.herokuapp.com/monster/show/${this.props.propsIdMonster}`
            )
                .then(response => response.data)
                .then(data => {
                    // console.log(data);
                    this.setState({
                        pictureMonster: data.picture,
                        nameMonster: data.name,
                        levelMonster: data.level,
                        scoreMonster: data.score,
                        descriptionMonster: data.description,
                        idMonster: data.id
                    });
                });
        }
        if (this.state.turn === 4) {
            this.setState({ turn: 0 });
            this.click();
        }
    }

    rollTheDice() {
        if (this.state.turn < 4) {
            let attack = Math.floor(Math.random() * (5 - 1)) + 1;
            let win = Math.floor(Math.random() * Math.floor(2));
            let hunterPoint = 0;
            let monsterPoint = 0;

            win < 1
                ? (hunterPoint = -attack * this.state.levelMonster)
                : (hunterPoint = attack * this.state.levelMonster);

            win < 1
                ? (monsterPoint = attack * this.state.levelMonster)
                : (monsterPoint = -attack * this.state.levelMonster);

            Axios.post(`https://wild-blood.herokuapp.com/fight/add`, {
                monster_id: this.state.idMonster,
                hunter_id: this.props.propsId,
                hunter_points: hunterPoint,
                monster_points: monsterPoint
            });
            let scoreA = parseInt(this.state.score) + parseInt(hunterPoint);
            let scoreB =
                parseInt(this.state.scoreMonster) + parseInt(monsterPoint);
            let newTurn = parseInt(this.state.turn) + parseInt(1);
            localStorage.setItem("myData", scoreA);

            this.setState({
                score: scoreA,
                scoreMonster: scoreB,
                hunterPoint: hunterPoint,
                turn: newTurn
            });
        } else {
            this.click();
        }
    }
    click() {
        this.props.parentMethod();
    }

    render() {
        return (
            <div className="combat">
                <div className="opponent1">
                    <img alt="yo" src={this.state.pictureMonster} />
                    <div>
                        <p className="opponent_name">
                            {this.state.nameMonster}
                        </p>
                        <p>Level: {this.state.levelMonster}</p>
                        <p>{this.state.scoreMonster} points</p>
                    </div>
                </div>

                <div className="combat-groupBtn">
                    <button onClick={this.rollTheDice}>FIGHT!</button>
                    <p>SCORE: {this.state.hunterPoint}</p>
                    <button onClick={this.click}>NEXT</button>
                </div>

                <div className="opponent2">
                    <div>
                        <p className="opponent_name">{this.state.name}</p>
                        <p>Level: {this.state.level}</p>
                        <p>{this.state.score} points</p>
                    </div>
                    <img alt="yoyo" src={this.state.picture} />
                </div>
            </div>
        );
    }
}

export default Combat;
