import React, {Component} from 'react';
import Room from './Room';
import './App.css';
import fetch from 'isomorphic-fetch';
import socketIOClient from "socket.io-client";
import $ from 'jquery';

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
      submitted: false,
      submittedCards: ["some text", "other text"], // edit text to display white cards submited
      currentUser: {blackCardHolder: false, score:0} //needs to be created in websocket
    }
    this.addToUsedBlackPile = this.addToUsedBlackPile.bind(this);
    this.startGame = this.startGame.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addJoinedUser = this.addJoinedUser.bind(this);
    this.loadJoinedUsers = this.loadJoinedUsers.bind(this);
    this.submittedTrue = this.submittedTrue.bind(this);
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


submittedTrue () {
    this.setState ({
      submitted: true
    })
    console.log('inside subm')
}

  render() {
    let room;
    console.log(this.state, 'state')
    room = <Room
            currentUser= {this.state.currentUser}
            addToUsedBlackPile={this.addToUsedBlackPile}
            blackCards={this.state.blackCards}
            maxUsers={this.state.maxUsers}
            numberOfUsers={this.state.numberOfUsers}
            startGame={this.startGame}
            waitingRoom={this.state.waitingRoom}
            whiteCards={this.state.whiteCards}
            saveCards={this.saveCards}
            addJoinedUser={this.addJoinedUser}
            submittedTrue ={this.submittedTrue}
            submitted = {this.state.submitted}
            submittedCards ={this.state.submittedCards}
          />;

    return (
      <div>
        {room}
      </div>
    )
  }
}

export default App;
