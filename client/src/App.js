import React, {Component} from 'react';
import Players from './Players';
import BlackCard from './BlackCard';
import CardDisplay from './CardDisplay';
import Role from './Role';
import fetch from 'isomorphic-fetch';

class App extends Component {
  const { users, blackText} = this.state;

  const playerElements = users.map((eachUser, i) => (
    <Players key={i} eachUser={eachUser}/>
  ));

  const playerElements = users.map((eachUser, i) => (
    <Players key={i} eachUser={eachUser.name} score={eachUser.score} id={i} />
  ));

  const whiteElements = whiteText.map((text, i) => (
    <CardDisplay key={i} text={text} id={i} />
  ));

  render() {
    return (
      <div class="wrapper">
        {Role}
      </div>
    )
  }
}
export default App;
