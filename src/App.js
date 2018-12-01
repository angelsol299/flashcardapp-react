import React, { Component } from "react";
import Card from "./Card/Card";
import DrawButton from "./DrawButton/DrawButton";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        { id: 1, eng: "English", han: "Hnazi", pin: "Pinyin" },
        { id: 2, eng: "English_2", han: "Hnazi_2", pin: "Pinyin_2" }
      ],
      currentCard: {}
    };
  }

  componentWillMount() {
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    });
  }

  getRandomCard(currentCards) {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  updateCard() {
    console.log("working method");
  }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card
            eng={this.state.currentCard.eng}
            han={this.state.currentCard.han}
            pin={this.state.currentCard.pin}
          />
          <div className="buttonRow">
            <DrawButton drawCard={this.updateCard} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
