import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      errorMessage: '',
    };
  }

  componentDidMount() {
    const { url, boardName } = this.props
    axios.get(url + boardName + '/cards')
        .then((response) => {
          const newCards = response.data.map((card) => {
            return {
              text: card.card.text,
              emoji: card.card.emoji,
            }
          })
          this.setState({ cards: newCards });
        })
        .catch((error) => {
          this.setState({
            errorMessage: error.message,
          });
        });
  }

  generateCardList = () => {
    const { cards } = this.state

    if (cards.length > 0) {
      return cards.map( (card, i) => {
        return <Card key={ i } cardText={ card.text } cardEmoji={ card.emoji }/>
      });
    }
  }

  render() {
    return (
      <div className="board">
        { this.generateCardList() }
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
