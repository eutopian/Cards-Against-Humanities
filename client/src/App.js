import React, {Component} from 'react';
import Room from './Room';
import './App.css';
import fetch from 'isomorphic-fetch';
import socketIOClient from "socket.io-client";
import $ from 'jquery'

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
    }
    this.addToUsedBlackPile = this.addToUsedBlackPile.bind(this);
    this.startGame = this.startGame.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addJoinedUser = this.addJoinedUser.bind(this);
    this.loadJoinedUsers = this.loadJoinedUsers.bind(this);
  }
  
  componentWillMount() {
    this.loadJoinedUsers();
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

  addJoinedUser() {
    console.log('mounted!')
    socket.emit('FromAPI')
    socket.on("updateUsers", (numOfUsers) => {
      console.log('numberofusers in componentdidmount', numOfUsers)
      this.setState({ numberOfUsers: numOfUsers})
    });
  }

  loadJoinedUsers() {
    socket.emit('FromAPI2')
    socket.on("updateUsers2", (numOfUsers) => {
      console.log('numberofusers in componentdidmount', numOfUsers)
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

//   componentDidMount() {
//     debugger
//     console.log(this.state.numberOfUsers)
//     const { endpoint } = this.state;
//     const socket = socketIOClient(endpoint);
//     let num = this.state.numberOfUsers++
//     socket.on("FromAPI", () => this.setState({ numberOfUsers: num }));
//     console.log(this.state.numberOfUsers)
//   }
  

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
              saveCards={this.saveCards}
              addJoinedUser={this.addJoinedUser}
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
