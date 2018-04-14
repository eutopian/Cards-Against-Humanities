import React from 'react';
import Players from './Players';
import BlackCard from './BlackCard';
import CardDisplay from './CardDisplay';

const Room = ({maxUsers, numberOfUsers, waitingRoom}) => {
  const playing = () => {
    return (
      <div>
        <Players />
        <BlackCard />
        <CardDisplay />
      </div>
    )
  }
  const waiting = () => {
    return (
      <div className='room'>
        <p> Current </p>
        <p id='slots'>0</p>
        <p> / 6 players</p>
        {/* <p id='slots'>Current {numberOfUsers}</p> */}
        <button id='joinButton' type='button'>Join</button>
      </div>
    )
  }
  const view = waitingRoom ? waiting() : playing();

  return (
    <div>
      {view}
    </div>
  )
}

export default Room;
