import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  generateEmoji = () => {
    const emoji = require("emoji-dictionary");
    const { cardEmoji } = this.props

    return cardEmoji && emoji.getUnicode(cardEmoji);
  }

  render() {
    return (
      <div className="card">
        { this.props.cardText }
        { this.generateEmoji() }
      </div>
    )
  }
}

Card.propTypes = {
  cardText: PropTypes.string
};

export default Card;
