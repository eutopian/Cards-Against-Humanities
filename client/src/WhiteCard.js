import React from 'react';

const WhiteCard = ({whiteCards, submittedTrue }) => {
  const whiteCard = whiteCards[Math.floor(Math.random() * whiteCards.length - 1)];
  const whiteCardDisplay = whiteCard.CardInfo;

  return (
    <div id='whiteCard' onClick={submittedTrue} >
      <p>{whiteCardDisplay}</p>
    </div>
  )
}

export default WhiteCard;
