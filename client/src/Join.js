import React from 'react';

const JoinStartButton = ({numberOfUsers, startGame, add}) => {
  const join = () => {
    return <button className='joinButton' onClick={add} type='button'>Join</button>;
  }

  const start = () => {
    return <button className='joinButton' onClick={startGame} type='button'>Start</button>;
  }
  let button = numberOfUsers === 5 ? start() : join();
  return (
    <div>
      {button}
    </div>
  )
}

export default JoinStartButton;