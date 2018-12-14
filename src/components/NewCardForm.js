import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: '',
    };
  }

  resetState = () => {
    this.setState({
      text: '',
      emoji: '',
    });
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { text, emoji } = this.state;

    if (text === '' || emoji === '') return;

    console.log(event);
    this.props.addCardCallback(this.state);
    this.resetState();
  }

  generateEmojiOptions = () => {
    return EMOJI_LIST.map( (cardEmoji, i) => {
      return <option key={ i } value={ cardEmoji }>{ emoji.getUnicode(cardEmoji) }</option>
    })
  }

  render() {
    return (
      <section className="new-card-form">
        <h2 className="new-card-form__header">Add a Card</h2>
        <form onSubmit={this.onSubmit} name="new-card-form" className="new-card-form__form">
          <div>
            <textarea className="new-card-form__form-textarea" name="text" onChange={ this.onFormChange } value={ this.state.text }></textarea>
          </div>

          <div>
            <label className="new-card-form__form-label" htmlFor="emoji">Emoji:</label>
            <select className="new-card-form__form-select" name="emoji" placeholder="emoji" onChange={ this.onFormChange } value={ this.state.emoji }>
              { this.generateEmojiOptions() }
            </select>
          </div>

          <input className="new-card-form__form-button" type="submit" name="submit" value="Add Card" />
        </form>
      </section>
    );
  }


}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
