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
    
    // console.log(this.state.numberOfUsers)
    // const { endpoint } = this.state;
    // const socket = socketIOClient(endpoint);
    // socket = io.connect();
    // const socket = socketIOClient(endpoint);
    // let num = this.state.numberOfUsers++
    // console.log(num)
    // socket.on("FromAPI", () => this.setState({ numberOfUsers: num }));
    socket.on("FromAPI", (num) => {
      // setInterval(()=>{
        // console.log(document.getElementById('slots').innerHTML)

        // let num = document.getElementById('slots').innerHTML + 1;
        // console.log(num)
        document.getElementById('slots').innerHTML = num;
      });
  
    
    // console.log(this.state.numberOfUsers)
  }
  
  componentDidUpdate() {

      // },500)
      
      // var $usernameDiv = $('<p id="slots"/>')
      // .text("Current", num, '/' )
  
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
