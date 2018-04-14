import React, {Component} from 'react';
import Players from './Players';
import BlackCard from './BlackCard';
import CardDisplay from './CardDisplay';
import Role from './Role';
import Role from './Submitted';
import fetch from 'isomorphic-fetch';

class App extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    const { users, blackCard, currentPlayer, subWhiteCards} = this.state;
    
    const eachUser = users.map((eachUser, i) => (
      <Role key={i} eachUser={eachUser} id={i} blackCard={blackCard} currentPlayer={currentPlayer} users={users} subWhiteCards={subWhiteCards}/>
    ));

    return (
      <div className="wrapper">
        {eachUser}
      </div>
    )
  }
}

export default App;
