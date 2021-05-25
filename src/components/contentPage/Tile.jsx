import React, { Component } from 'react';
import "./content_styles.scss";

class Tile extends Component {
    render() {
        return (
          <div className="square">
            <div className="square__image">
              <img src={this.props.image} alt={this.props.alt_text}></img>
            </div>
            <div className="square__text_holder">
            <div className="square__title">{this.props.title}</div>
              <div className="square__text">{this.props.text}</div>
            </div>
          </div>
        )
    }
}

export default Tile;