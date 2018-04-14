import React from 'react';

const JoinStartButton = ({numberOfUsers, startGame, add, addJoinedUser, clickedJoin}) => {
  const join = () => {
    return <button className={clickedJoin ? 'joinHide' : 'joinButton'} onClick={addJoinedUser} type='button'>Join</button>;
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
