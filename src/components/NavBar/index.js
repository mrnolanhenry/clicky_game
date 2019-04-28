import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {

    state = {
        guessMessage: "",
        score: 0,
        topScore: 0
    }

    componentDidMount() {
        this.setState({guessMessage: "Click an Image to Begin!"})
    }

    render() {
        return (
            <div className="nav-bar row">
                <div className="col-sm-4 col-md-4 col-lg-4 col-center">
                    <a href="/"><h5>Memory Game!</h5></a>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-center">
                    <h5>{this.state.guessMessage}</h5>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-center">
                    <h5>Score: {this.state.score}  | Top Score: {this.state.topScore} </h5>
                </div>
            </div>
        )
    }

}

export default NavBar;