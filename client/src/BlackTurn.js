import React from 'react';
import Submitted from './Submitted';
import Players from './Players';
import BlackCard from './BlackCard';

const BlackTurn = (props) => {
  const {blackCard, currentPlayer, users, subWhiteCards} = props;

  const  user = users.map((user, i) => (
    <Players key={i} user={user.name} score={user.score} id={i} />
  ));

  
  return (
    <div> 
      <div className="user">
        {currentPlayer}
      </div>
        {<BlackCard blackCard={blackCard}/>}
      <div className="bottom ">
        {<Submitted subWhiteCards={subWhiteCards} />}
      </div>
      <div className="players ">
        {user}
      </div>
  </div>
  )
}

export default BlackTurn;