import React from 'react';

const CardDisplay = (props) => {
  const {text} = props;

  return (
    <div className="cards white">
      <p>{text}</p>
      <button class="button" type="button">Submit</button>
    </div>

  )
}

export default CardDisplay;

//current game display (before submit) **only for individuals who are not the judge
