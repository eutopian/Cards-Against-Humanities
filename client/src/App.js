import React, {Component} from 'react';
import Room from './Room';
import './App.css';
import fetch from 'isomorphic-fetch';
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxUsers: 5,
      numberOfUsers: 0,
      users: {},
      waitingRoom: true
    }
  }

  componentDidMount() {
    debugger
    console.log(this.state.numberOfUsers)
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    let num = this.state.numberOfUsers++
    socket.on("FromAPI", () => this.setState({ numberOfUsers: num }));
    console.log(this.state.numberOfUsers)
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
