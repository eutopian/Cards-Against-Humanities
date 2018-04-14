import React from 'react';
import Players from './Players';
import BlackCard from './BlackCard';
import CardDisplay from './CardDisplay';
import JoinStartButton from './Join';

const Room = ({addToUsedBlackPile, blackCards, maxUsers, numberOfUsers, startGame, add, waitingRoom, whiteCards, saveCards}) => {
  const playing = () => {
    return (
      <div>
        <Players />
        <BlackCard addToUsedBlackPile={addToUsedBlackPile} blackCards={blackCards} />
        <CardDisplay whiteCards={whiteCards}/>
        <button id='submitCard' onClick={saveCards}>Submit</button>
      </div>
    )
  }
  const waiting = () => {
    return (
      <div className='room'>

        {/* <p> Current </p>
        <p id='slots'>0</p>
        <p> / 6 players</p> */}
        {/* <p id='slots'>Current {numberOfUsers}</p> */}
        {/* <button id='joinButton' type='button'>Join</button> */}
        <p id='slots'>0</p>
        {/* <p id='slots'>Current </p> <p id='userNum'>0</p> <p id='slots'> / {maxUsers} Max</p> */}
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
