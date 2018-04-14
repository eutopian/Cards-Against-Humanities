import React, {Component} from 'react';
import Room from './Room';
import './App.css';
import fetch from 'isomorphic-fetch';
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blackCards: [],
      maxUsers: 5,
      numberOfUsers: null,
      usedBlackCards: [],
      usedWhiteCards: [],
      users: {},
      waitingRoom: true,
      endpoint: `http://127.0.0.1:3000`,
      whiteCards: [],
      winner: false,
      currentBlackCard: null
    }
    this.addToUsedBlackPile = this.addToUsedBlackPile.bind(this);
    this.startGame = this.startGame.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addJoinedUser = this.addJoinedUser.bind(this);
    this.loadJoinedUsers = this.loadJoinedUsers.bind(this);
  }

  // only one person will make the fetch request for the cards. This ensures the total deck of cards is 
  // consistent and shared across different instances of react render
  componentWillMount() {
    this.loadJoinedUsers();
  }

  addJoinedUser() {
    socket.emit('JoinGame')
    socket.on("updateUsers", (numOfUsers) => {
      this.setState({ numberOfUsers: numOfUsers})
    });
    console.log(this.state.numberOfUsers)
    if (this.state.numberOfUsers === 1) {
      fetch('/getBlackCardInfo')
        .then(response => response.json())
        .then(data => {
          this.setState({
            blackCards: data
          });
          socket.emit('fetchedBlackCards', data)
        });
      fetch('/getWhiteCardInfo')
        .then(response => response.json())
        .then(data => {
          this.setState({
            whiteCards: data
          });
          socket.emit('fetchedWhiteCards', data)
        })
    }
    socket.emit('mountedBlackCards');
    socket.on('updateBlackCards', (bc) => {
      this.setState({ blackCards: bc});
      this.setState({ currentBlackCard: bc[0] });
      this.setState({ usedBlackCards: bc[0] })
    })
    socket.emit('mountedWhiteCards');
    socket.on('updateWhiteCards', (whiteCards) => {
      this.setState({ whiteCards: whiteCards})
    })
  }

  loadJoinedUsers() {
    socket.emit('FromAPI2')
    socket.on("updateUsers2", (numOfUsers) => {
      this.setState({ numberOfUsers: numOfUsers})
    });
  }

  saveCards(){
    socket.on('SaveCards', (data) => {
      data.savedCardsArr.push(data.currentCard)
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
    let room = <Room
              addToUsedBlackPile={this.addToUsedBlackPile}
              blackCards={this.state.blackCards}
              maxUsers={this.state.maxUsers}
              numberOfUsers={this.state.numberOfUsers}
              startGame={this.startGame}
              add = {this.add}
              waitingRoom={this.state.waitingRoom}
              whiteCards={this.state.whiteCards}
              saveCards={this.saveCards}
              addJoinedUser={this.addJoinedUser}
              currentBlackCard={this.state.currentBlackCard}
              
            />;
    return (
      <div>
        {room}
      </div>
    )
  }
}
export default App;
