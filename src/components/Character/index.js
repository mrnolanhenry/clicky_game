import React, { Component } from "react";
import "./style.css";

class Character extends Component {

    render() {
        return (
            <div className="character-card">
                {/* <button id={this.props.id} className="character-button"> */}
                <button id={this.props.id} className="character-button" onClick={() => this.props.handleCharacterClick(this.props.id)}>
                    <div className={`img-container marked-${this.props.marked}`}>
                        {/* {console.log(this.props.image)} */}
                        {/* <img alt={this.props.name} src={require(this.props.image)} /> */}
                        <img alt={this.props.name} src={this.props.image} />
                        {/* <img alt={this.props.name} src={require("../../assets/img/characters/thor.jpg")} /> */}
                    </div>
                </button>
            </div>
        )
    }

}

export default Character;