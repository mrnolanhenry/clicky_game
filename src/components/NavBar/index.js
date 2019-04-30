import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {

    render() {
        return (
            <div className="nav-bar row">
                <div className="col-sm-4 col-md-4 col-lg-4 col-center">
                    <a href="/">
                        <h5>Remember The Fallen</h5>
                    </a>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-center">
                    <h5>{this.props.guessMessage}</h5>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-center">
                    <h5>Score: {this.props.score}  | Top Score: {this.props.topScore} </h5>
                </div>
            </div>
        )
    }

}

export default NavBar;