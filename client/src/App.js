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
      maxUsers: 5,
      numberOfUsers: 0,
      users: {},
      waitingRoom: true,
      endpoint: `http://127.0.0.1:3000`
    }
  }

  componentDidMount() {
    socket.on("FromAPI", (numOfUsers) => {
        document.getElementById('slots').innerHTML = numOfUsers;
      });
  }

  render() {
    return (
      <div>
        <Room maxUsers={this.state.maxUsers} numberOfUsers={this.state.numberOfUsers} waitingRoom={this.state.waitingRoom} />
        <p></p>
      </div>
    )
  }
}
export default App;
