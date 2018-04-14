import React from 'react';

<<<<<<< HEAD
const BlackCard = (props) => {
  const {blackCard} = props;

  return (
    <div className="black-div">
      <div className="cards black">
          <p> {blackCard}</p>
      </div>
=======
const BlackCard = ({blackCards}) => {
  let blackCard = blackCards[Math.floor(Math.random() * blackCards.length - 1)];
  let blackCardDisplay = blackCard.CardInfo;

  return (
    <div id='blackCard'>
      {blackCardDisplay}
>>>>>>> 2971c7820c3fec22c545c5da101d879775686cc0
    </div>
  )
}

export default BlackCard;
