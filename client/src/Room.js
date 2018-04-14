import React from 'react';
import Players from './Players';
import BlackCard from './BlackCard';
import CardDisplay from './CardDisplay';
import JoinStartButton from './Join';

const Room = ({addToUsedBlackPile, blackCards, maxUsers, numberOfUsers, startGame, add, waitingRoom, whiteCards}) => {
  const playing = () => {
    return (
      <div>
        <Players />
        <BlackCard addToUsedBlackPile={addToUsedBlackPile} blackCards={blackCards} />
        <CardDisplay whiteCards={whiteCards}/>
      </div>
    )
  }
  const waiting = () => {
    return (
      <div className='room'>
        <p id='slots'>Current {numberOfUsers} / {maxUsers} Max</p>
        <JoinStartButton numberOfUsers={numberOfUsers} startGame={startGame} add={add}/>
      </div>
    )
  }
  let view = waitingRoom ? waiting() : playing();

  return (

    <div>
      {view}
    </div>
  )
}

export default Room;
