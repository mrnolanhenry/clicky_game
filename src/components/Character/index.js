import React, { Component } from "react";
import "./style.css";

class Character extends Component {

    render() {
        return (
            <div className="character-card">
                <div className="img-container">
                {/* {console.log(this.props.image)} */}
                    {/* <img alt={this.props.name} src={require(this.props.image)} /> */}
                    <img alt={this.props.name} src={this.props.image} />
                    {/* <img alt={this.props.name} src={require("../../assets/img/characters/thor.jpg")} /> */}
                </div>
            </div>
        )
    }

}

export default Character;