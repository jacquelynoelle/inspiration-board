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

  deleteCard = () => {
    this.props.deleteCardCallback(this.props.id);
  }

  render() {
    return (
      <div className="card">
        <div className="card__content">
          <span className="card__context-text">{ this.props.cardText }</span>
          <span className="card__context-emoji">{ this.generateEmoji() }</span>
        </div>
        <button onClick={ this.deleteCard }className="card__delete">X</button>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  cardText: PropTypes.string,
  cardEmoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
