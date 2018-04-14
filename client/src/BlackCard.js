import React from 'react';

const BlackCard = (props) => {
  const {blackCard} = props;

  return (
    <div className="black-div">
      <div className="cards black">
          <p> {blackCard}</p>
      </div>
    </div>
  )
}

export default BlackCard;
