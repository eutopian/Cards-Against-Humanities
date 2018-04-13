import React, {Component} from 'react';
import Room from './Room';
import './App.css';
import fetch from 'isomorphic-fetch';

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
