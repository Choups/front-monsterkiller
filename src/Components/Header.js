import React, { Component } from "react";
import "./Header.css";
import Axios from "axios";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: "?",
            IdHunter: null
        };

        this.clickToMain = this.clickToMain.bind(this);
        this.clickToProfil = this.clickToProfil.bind(this);
        this.clickToDeconnect = this.clickToDeconnect.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (localStorage.getItem("myData") !== this.state.score) {
            let temp = localStorage.getItem("myData");
            this.setState({ score: temp });
        }
        // Utilisation classique (pensez bien à comparer les props) :
        if (this.props.propsId !== prevProps.propsId) {
            //   this.setState({ IdHunter: this.props.propsId });
            //   this.getScore();
            Axios.get(
                `http://wild-blood.herokuapp.com:8000/hunter/show/${this.props.propsId}`
            )
                .then(response => response.data)
                .then(data => {
                    this.setState({
                        score: data.hunter.score,
                        picture: data.hunter.picture,
                        IdHunter: this.props.propsId
                    });
                });
        }
    }

    clickToMain() {
        this.props.parentMethod(this.props.propsId);
    }

    clickToProfil() {
        this.props.parentMethod2(this.props.propsId);
    }

    clickToDeconnect() {
        this.props.parentMethod3();
    }

    render() {
        return (
            <nav className="NavBlock">
                <img
                    className="ButtonsNav"
                    onClick={this.clickToProfil}
                    src={this.state.picture}
                    alt=":("
                />
                <button className="ButtonsNav">{this.state.score}</button>
                <button
                    className="ButtonsNav logo off"
                    onClick={this.clickToMain}
                >
                    WB
                </button>
                <button className="ButtonsNav" onClick={this.clickToDeconnect}>
                    X
                </button>
            </nav>
        );
    }
}

export default Header;
