import React from 'react';

const BlackCard = ({blackCards, currentBlackCard}) => {
  return (
    <div id='blackCard'>
      {currentBlackCard.CardInfo}
    </div>
  )
}

export default BlackCard;
