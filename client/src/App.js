import React, {Component} from 'react';
import Room from './Room';
import './App.css';
import fetch from 'isomorphic-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blackCards: [],
      maxUsers: 5,
      numberOfUsers: 4,
      usedBlackCards: [],
      usedWhiteCards: [],
      users: {},
      waitingRoom: true,
      whiteCards: [],
      winner: false
    }
    this.addToUsedBlackPile = this.addToUsedBlackPile.bind(this);
    this.componentWillMount = this.componentWillMount(this);
    this.startGame = this.startGame.bind(this);
    this.add = this.add.bind(this)
  }

  componentWillMount() {
    fetch('/getBlackCardInfo')
      .then(response => response.json())
      .then(data => {
        this.setState({
          blackCards: data
        });
      });
    fetch('/getWhiteCardInfo')
      .then(response => response.json())
      .then(data => {
        this.setState({
          whiteCards: data
        });
      })
  }

  add() {
    let num = this.state.numberOfUsers + 1;
    this.setState({
      numberOfUsers: num
    })
  }

  startGame() {
    this.setState({
      waitingRoom: false
    })
  }

  addToUsedBlackPile(card, i) {
    this.setState({
      blackCards: this.state.blackCards.splice(i, 1),
      usedBlackCards: this.state.usedBlackCards.push(card)
    })
  }

  render() {
    let room;
    if (this.state.blackCards.length > 0 && this.state.whiteCards.length > 0) {
      room = <Room
              addToUsedBlackPile={this.addToUsedBlackPile}
              blackCards={this.state.blackCards}
              maxUsers={this.state.maxUsers}
              numberOfUsers={this.state.numberOfUsers}
              startGame={this.startGame}
              add = {this.add}
              waitingRoom={this.state.waitingRoom}
              whiteCards={this.state.whiteCards}
            />;
    } else {
      room = <p>Loading</p>
    }
    return (
      <div>
        {room}
      </div>
    )
  }
}
export default App;
