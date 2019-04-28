import React, { Component } from "react";
import "./style.css";

class Character extends Component {

    render() {
        return (
            <div className="character-card">
                <div className="img-container">
                    <img alt={this.props.name} src={this.props.image} />
                </div>
            </div>
        )
    }

}

export default Character;