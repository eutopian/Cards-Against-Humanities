import React from 'react';
import WhiteTurn from './WhiteTurn';
import BlackTurn from './BlackTurn';
import WhiteCard from './WhiteCard';

const CardDisplay = ({whiteCards}) => {
  const whiteCardsArr = [];

  for (let i = 0; i < 7; i++) {
    whiteCardsArr.push(<WhiteCard key={i} whiteCards={whiteCards} />);
  }
  return (
    <div id='whiteCardDisplayArea'>
      {whiteCardsArr}
    </div>
  )
}

export default CardDisplay;
