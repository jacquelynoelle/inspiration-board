import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      errorMessage: '',
    };
  }

  componentDidMount() {
    this.getCards();
  }

  getCards = () => {
    const { url, boardName } = this.props
    axios.get(url + boardName + '/cards')
        .then((response) => {
          const newCards = response.data.map((card) => {
            return {
              text: card.card.text,
              emoji: card.card.emoji,
              id: card.card.id,
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

  deleteCard = (cardID) => {
    const deleteURL = 'https://inspiration-board.herokuapp.com/cards/'
    axios.delete(deleteURL + cardID)
      .then((response) => {
        this.getCards();
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  addCard = (cardData) => {
    const { url, boardName } = this.props
    const fullURL = url + boardName + '/cards'
    axios.post(fullURL, cardData)
      .then((response) => {
        const newCard = { ...response.data.card }
        const updatedCards = this.state.cards;
        updatedCards.push(newCard);

        this.setState({cards: updatedCards});
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
        return <Card key={ i } id={ card.id } cardText={ card.text } cardEmoji={ card.emoji } deleteCardCallback={ this.deleteCard }/>
      });
    }
  }

  render() {
    return (
      <main>
        <div className="board">
          { this.generateCardList() }
        </div>
        <NewCardForm addCardCallback={ this.addCard } />
      </main>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
