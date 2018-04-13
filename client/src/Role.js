import React, { PropTypes } from  'react';

const Players = (props) => {
  const { eachUser, score} = props;

  if (eachUser.blackCardJudge) {
    return (
        <div class="user">
        {currentPlayer}
      </div>
        {<BlackCard blackText={blackText}/>}
      <div class="bottom ">
       {whiteElements}
      </div>
      <div class="players ">
        {playerElements}
      </div>
       )
  } else {
    return (
        <div class="user">
          {currentPlayer}
        </div>
          {<BlackCard blackText={blackText}/>}
        <div class="bottom ">
         {whiteElements}
        </div>
        <div class="players ">
          {playerElements}
        </div>
       )
  }
  
}

export default Players;

<div class="user">
          {currentPlayer}
        </div>
          {<BlackCard blackText={blackText}/>}
        <div class="bottom ">
         {whiteElements}
        </div>
        <div class="players ">
          {playerElements}
        </div>