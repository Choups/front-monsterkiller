import React, { Component } from "react";
import "./Profil.css";

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Profil">
                <div>
                    <img
                        className="profil-avatar-img"
                        src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"
                        alt="avatar"
                    />
                </div>
                <div className="profil-infos">
                    <ul>
                        <li>Nickname: Killer</li>
                        <li>Score actuel: 500</li>
                        <li>Level: 7</li>
                        <li>Description: lorem ipsum blabla djssd dfsdfsd</li>
                    </ul>

                    <p>Fight history:</p>
                    <ul>
                        <li>victoire contre SuperNana</li>
                        <li>défaire contre Gogolito</li>
                        <li>victoire contre Chatroulette</li>
                        <li>victoire contre SuperCochon</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Profil;
