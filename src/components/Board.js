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
    };
  }

  componentDidMount() {
    this.setState({
      cards: CARD_DATA.cards,
    });
  }

  generateCardList = () => {
    const { cards } = this.state

    return cards.map( (card, i) => {
      return <Card key={ i } cardText={ card.text } cardEmoji={ card.emoji }/>
    });
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

};

export default Board;
