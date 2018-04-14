import React from 'react';
import Players from './Players';
import BlackCard from './BlackCard';
import CardDisplay from './CardDisplay';
import Submitted from './Submitted';

const WhiteTurn = (props) => {
  const {blackCard, eachUser, currentPlayer, users, subWhiteCards} = props;

  const  user = users.map((user, i) => (
    <Players key={i} user={user.name} score={user.score} id={i} subWhiteCard={subWhiteCards}/>
  ));

  if (they have clicked submit) { //figure out the technical aspect to ask the if statement
    const hand = <Submitted subWhiteCards={subWhiteCards} />
  } else {
    const hand = eachUser.whiteCards.map((text, i) => (
      <CardDisplay key={i} text={text} id={i} />
    ));
  }

  //shows your current hand, with each white card

  return (
    <div>  
      <div className="user">
        {currentPlayer}
      </div>
        {<BlackCard blackCard={blackCard}/>}
      <div className="bottom ">
        {hand}
      </div>
      <div className="players ">
        {user}
      </div>
    </div>

  )
}

export default WhiteTurn;
