import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {

    render() {
        return (
            <div className="nav-bar row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <h2>Memory Game!</h2>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <h2>Click an Image to Begin</h2>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <h2>Score:  | Top Score: </h2>
                </div>
            </div>
        )
    }

}

export default NavBar;