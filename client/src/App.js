import React, {Component} from 'react';
import Players from './Players';
import BlackCard from './BlackCard';
import CardDisplay from './CardDisplay';
import fetch from 'isomorphic-fetch';
import socketIOClient from "socket.io-client";
import $ from 'jquery'

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
      endpoint: `http://127.0.0.1:3000`,
      whiteCards: [],
      winner: false
    }
    this.addToUsedBlackPile = this.addToUsedBlackPile.bind(this);
    this.componentWillMount = this.componentWillMount(this);
    this.startGame = this.startGame.bind(this);
    this.add = this.add.bind(this)
    this.saveCards = this.saveCards.bind(this)
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


  componentDidMount() {
    console.log('mounted!')
    socket.on("FromAPI", (numOfUsers) => {
      document.getElementById('slots').innerHTML = numOfUsers;
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
