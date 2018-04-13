import React from 'react';
import WhiteTurn from './WhiteTurn';
import BlackTurn from './BlackTurn';

const CardDisplay = (props) => {
  const {text} = props;

  return (
    <div class="cards white">
      <p>{text}</p>
    </div>

  )
}

export default CardDisplay;
