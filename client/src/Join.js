import React from 'react';

const JoinStartButton = ({numberOfUsers, startGame, addJoinedUser}) => {
  const join = () => {
    return <button className='joinButton' onClick={addJoinedUser} type='button'>Join</button>;
  }

  const start = () => {
    if (numberOfUsers > 4) {
      return <div> 
    <button className='joinButton' onClick={startGame} type='button'>Start</button>
    </div>
    }
    return <div> 
    <button className='joinButton bothButtons' onClick={startGame} type='button'>Start</button>
    <button className='joinButton bothButtons' onClick={addJoinedUser} type='button'>Join</button>
    </div>
  }

  let button = numberOfUsers >= 3 ? start() : join();
  return (
    <div>
      {button}
    </div>
  )
}

export default JoinStartButton;
