import React from 'react';

const JoinStartButton = ({numberOfUsers, startGame, add, addJoinedUser}) => {
  const join = () => {
    return <button className='joinButton' onClick={addJoinedUser} type='button'>Join</button>;
  }

  const start = () => {
    return <button className='joinButton' onClick={startGame} type='button'>Start</button>;
    return <button className='joinButton' onClick={addJoinedUser} type='button'>Join</button>;
  }

  let button = numberOfUsers >= 3 ? start() : join();
  return (
    <div>
      {button}
    </div>
  )
}

export default JoinStartButton;
