import React, { Component } from "react";
import "./Profil.css";
import Axios from "axios";

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: "",
            fights: []
        };
    }

    componentDidUpdate(prevProps) {
        // Utilisation classique (pensez bien à comparer les props) :
        if (this.props.propsId !== prevProps.propsId) {
            console.log("ok on est dedans");
            //   this.setState({ IdHunter: this.props.propsId });
            //   this.getScore();
            Axios.get(
                `http://192.168.1.37:8000/hunter/show/${this.props.propsId}`
            )
                .then(response => response.data)
                .then(data => {
                    console.log(data.fights);
                    this.setState({
                        picture: data.hunter.picture,
                        name: data.hunter.name,
                        level: data.hunter.level,
                        score: data.hunter.score,
                        description: data.hunter.description,
                        fights: data.fights
                    });
                });
        }
    }

    render() {
        return (
            <div className="Profil">
                <div>
                    <img
                        className="profil-avatar-img"
                        src={this.state.picture}
                        alt="avatar"
                    />
                </div>
                <div className="profil-infos">
                    <ul>
                        <li className="profil_title">{this.state.name}</li>
                        <li>Score: {this.state.score}</li>
                        <li>Level: {this.state.level}</li>
                        <li>About me: {this.state.description}</li>
                    </ul>

                    {this.state.fights.length > 0 ? (
                        <div className="fight_history">
                            <p className="profil_title">Fight history:</p>
                            <ul>
                                <li>
                                    {this.state.fights[0].monster_name} |{" "}
                                    {this.state.fights[0].hunter_points} |
                                    {this.state.fights[0].date}
                                </li>
                                <li>
                                    {this.state.fights[1].monster_name} |{" "}
                                    {this.state.fights[1].hunter_points} |
                                    {this.state.fights[1].date}
                                </li>
                                <li>
                                    {this.state.fights[2].monster_name} |{" "}
                                    {this.state.fights[2].hunter_points} |
                                    {this.state.fights[2].date}
                                </li>
                                <li>
                                    {this.state.fights[3].monster_name} |{" "}
                                    {this.state.fights[3].hunter_points} |
                                    {this.state.fights[3].date}
                                </li>
                                <li>
                                    {this.state.fights[4].monster_name} |{" "}
                                    {this.state.fights[4].hunter_points} |
                                    {this.state.fights[4].date}
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <p> No battle history </p>
                    )}
                </div>
            </div>
        );
    }
}

export default Profil;
