import React from 'react';
import WhiteTurn from './WhiteTurn';
import BlackTurn from './BlackTurn';
import WhiteCard from './WhiteCard';

const CardDisplay = ({ whiteCards, submitted, submittedTrue, submittedCards, turnBlack}) => {
  const whiteCardsArr = [];

  if (turnBlack) {
    if (submittedCards.length) {
      for (let i = 0; i < submittedCards.length; i++) {
        whiteCardsArr.push(
          <div id='whiteCard' onClick={submittedTrue} >
            <p>{submittedCards[i]}</p>
          </div>);
      }
    }
  } else if (!submitted) {
    for (let i = 0; i < 7; i++) {
      whiteCardsArr.push(<WhiteCard key={i} whiteCards={whiteCards} submittedTrue={submittedTrue}/>);
    }
   } else {
      for (let i = 0; i < submittedCards.length; i++) {
        whiteCardsArr.push(
          <div id='whiteCard'>
            <p>{submittedCards[i]}</p>
          </div>);
      }
    }

  return (
    <div id='whiteCardDisplayArea' >
      {whiteCardsArr}
    </div>
  )
}


export default CardDisplay;