import React from 'react';

const BlackCard = ({blackCards}) => {
  let blackCard = blackCards[Math.floor(Math.random() * blackCards.length - 1)];
  let blackCardDisplay = blackCard.CardInfo;

  return (
    <div id='blackCard'>
      {blackCardDisplay}
    </div>
  )
}

export default BlackCard;
