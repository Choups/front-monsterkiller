import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Profil from "./Components/Profil";
import Combat from "./Components/Combat";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "hiddenComponent",
            home: "show-100",
            main: "hiddenComponent",
            combat: "hiddenComponent",
            profil: "hiddenComponent",
            arrMonsters: [],
            arrHunters: [],
            arrFights: [],
            monsterActive: null,
            score: ""
        };
        this.goToMain = this.goToMain.bind(this);
        this.goToCombat = this.goToCombat.bind(this);
        this.goToProfil = this.goToProfil.bind(this);
        this.goToNextMonster = this.goToNextMonster.bind(this);
        this.otherMonster = this.otherMonster.bind(this);
        this.randomResult = this.randomResult.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.getAPImonster = this.getAPImonster.bind(this);
        this.getAPIfight = this.getAPIfight.bind(this);
        this.postAPIfight = this.postAPIfight.bind(this);
    }

    componentDidMount() {
        this.getAPImonster();
        this.getAPIhunters();
        this.getAPIfight();
    }

    componentDidUpdate(prevState) {
        // Utilisation classique (pensez bien à comparer les props) :
        if (this.state.IdMonster !== prevState.IdMonster) {
            //   this.setState({ IdHunter: this.props.propsId });
            //   this.getScore();
            Axios.get(
                `http://25.52.154.207:8000/hunter/show/${this.props.propsId}`
            )
                .then(response => response.data)
                .then(data => {
                    this.setState({
                        score: data.hunter.score,
                        IdHunter: this.props.propsId
                    });
                });
        }
    }

    postAPIfight() {
        Axios.post(`http://25.52.154.207:8000/fight/add`, {
            monster_id: 1,
            hunter_id: 1,
            monster_points: 100,
            hunter_points: 200
        });
    }

    getAPImonster() {
        Axios.get(`http://25.52.154.207:8000/monster/all`)
            .then(response => response.data)
            .then(data => {
                this.setState({
                    arrMonsters: data
                });
            });
    }
    getAPIhunters() {
        Axios.get(`http://25.52.154.207:8000/hunter/all`)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                this.setState({
                    arrHunters: data,
                    score: ""
                });
            });
    }

    getAPIfight() {
        Axios.get(`http://25.52.154.207:8000/fight/all`)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                this.setState({
                    arrFights: data
                });
            });
    }

    goToHome() {
        this.setState({
            header: "hiddenComponent",
            home: "show-100",
            main: "hiddenComponent",
            combat: "hiddenComponent",
            profil: "hiddenComponent"
        });
    }

    otherMonster() {
        // console.log("Ici on va SET STATE un nouveau MONSTRE");
    }
    randomResult() {
        // console.log(
        //     "Ici on va appliquer un algo de calcul de résultat aléatoire entre le user et le monstre"
        // );
    }

    goToNextMonster() {
        this.setState({
            header: "show-100",
            home: "hiddenComponent",
            main: "show-90",
            combat: "hiddenComponent",
            profil: "hiddenComponent"
        });
    }

    goToProfil(idHunter) {
        this.getAPIfight();
        this.setState({
            header: "show-100",
            home: "hiddenComponent",
            main: "hiddenComponent",
            combat: "hiddenComponent",
            profil: "show-90",
            IdHunter: idHunter
        });
    }
    goToMain(IdHunter) {
        this.setState({
            home: "hiddenComponent",
            header: "show-100",
            main: "show-90",
            combat: "hiddenComponent",
            profil: "hiddenComponent",
            IdHunter: IdHunter
        });
    }

    goToCombat(idMonster) {
        this.setState({
            main: "hiddenComponent",
            combat: "show-90",
            idMonster: idMonster
        });
    }

    update(scoreChanged) {
        this.setState({ score: scoreChanged });
    }

    render() {
        return (
            <div className="App">
                <div className={this.state.header}>
                    <Header
                        propsId={this.state.IdHunter}
                        parentMethod4={this.update}
                        parentMethod={this.goToMain}
                        parentMethod2={this.goToProfil}
                        parentMethod3={this.goToHome}
                    />
                </div>
                <div className={this.state.home}>
                    <Home parentMethod={this.goToMain} />
                </div>
                <div className={this.state.main}>
                    <Main
                        propsMonster={
                            this.state.arrMonsters[this.state.IdMonster]
                        }
                        propsId={this.state.IdHunter}
                        parentMethod={this.goToCombat}
                        parentMethod2={this.otherMonster}
                    />
                </div>
                <div className={this.state.combat}>
                    <Combat
                        propsId={this.state.IdHunter}
                        propsIdMonster={this.state.idMonster}
                        parentMethod={this.goToNextMonster}
                        parentMethod2={this.randomResult}
                    />
                </div>
                <div className={this.state.profil}>
                    <Profil propsId={this.state.IdHunter} />
                </div>
            </div>
        );
    }
}

export default App;
