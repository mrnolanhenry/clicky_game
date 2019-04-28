import React, { Component } from "react";
import "./style.css";

class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="row-center">
                    <h1>Memory Game!</h1>
                    <h6>Click each character only once</h6>
                </div>
            </header>
        )
    }

}

export default Header;



