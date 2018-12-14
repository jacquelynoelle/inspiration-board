import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  generateEmoji = () => {
    const { cardEmoji } = this.props

    return cardEmoji && emoji.getUnicode(cardEmoji);
  }

  render() {
    return (
      <div className="card">
        <div className="card__content">
          <span className="card__context-text">{ this.props.cardText }</span>
          <span className="card__context-emoji">{ this.generateEmoji() }</span>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  cardText: PropTypes.string
};

export default Card;
