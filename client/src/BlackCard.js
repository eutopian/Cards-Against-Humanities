import React from 'react';

const BlackCard = ({currentBlackCard}) => {
  var currBlackCard = currentBlackCard.CardInfo;

  return (
    <div id='blackCard'>
     <p> {currBlackCard} </p>
    </div>
  )
}

export default BlackCard;