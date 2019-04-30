import React, { Component } from "react";
import "./style.css";

class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="row-center">
                    <h2>"Remember The Fallen"</h2>
                    <h3>Memory Game</h3>
                    <h6>Click each character only once</h6>
                </div>
            </header>
        )
    }

}

export default Header;



