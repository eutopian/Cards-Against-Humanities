import React, { PropTypes } from  'react';
import BlackTurn from './BlackTurn';
import WhiteTurn from './WhiteTurn';

const Role= (props) => {
  const {currentPlayer, eachUser, blackCard, subWhiteCards} = props;

  if (currentPlayer.blackCardJudge) {
    return (
        {<BlackTurn blackCard={blackCard} eachUser={eachUser} currentPlayer={currentPlayer} subWhiteCard={subWhiteCards}/>}
    )
  } else {
    return (
        {<WhiteTurn blackCard={blackCard} playerElements={playerElements} currentPlayer={currentPlayer} subWhiteCard={subWhiteCards}/>}
    )
  }
}

export default Role;