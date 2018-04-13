import React from 'react';

const BlackCard = (props) => {
  const {blackText} = props;

  return (
    <div class="black-div">
      <div class="cards black">
          <p> {blackText}</p>
      </div>
    </div>
  )
}

export default BlackCard;
