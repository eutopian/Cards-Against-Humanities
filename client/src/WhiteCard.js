import React from 'react';

const WhiteCard = ({whiteCards}) => {
  const whiteCard = whiteCards[Math.floor(Math.random() * whiteCards.length - 1)];
  const whiteCardDisplay = whiteCard.CardInfo;

  return (
    <div id='whiteCard'>
      <p>{whiteCardDisplay}</p>
    </div>
  )
}

export default WhiteCard;
