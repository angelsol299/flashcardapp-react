import React, { Component } from "react";
import Card from "./Card/Card";
import DrawButton from "./DrawButton/DrawButton";
import { DB_CONFIG } from "./Config/Firebase/db_config";
import firebase from "firebase/app";
import "firebase/database";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app
      .database()
      .ref()
      .child("cards");
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {}
    };
  }

  componentWillMount() {
    const currentCards = this.state.cards;
    this.database.on("child_added", snap => {
      currentCards.push({
        id: snap.key,
        eng: snap.val().eng,
        spa: snap.val().spa,
        pin: snap.val().pin
      });
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      });
    });
  }

  getRandomCard(currentCards) {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <p
            style={{ textAlign: "center", fontSize: "25px", color: "darkblue" }}
          >
            Best Spanish Words
          </p>
          <Card
            eng={this.state.currentCard.eng}
            spa={this.state.currentCard.spa}
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
