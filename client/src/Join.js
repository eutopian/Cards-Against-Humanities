import React from 'react';

const JoinStartButton = ({numberOfUsers, startGame, add, addJoinedUser, clickedJoin}) => {
    var button = <button className={clickedJoin ? 'joinHide' : 'joinButton'} onClick={addJoinedUser} type='button'>Join</button>;

    if (numberOfUsers >= 3) {
      if (clickedJoin) {
        button = <button className='joinButton' onClick={startGame} type='button'>Start</button>;
      } else {
      button = <button className='joinButton' onClick={addJoinedUser} type='button'>Join</button>;
      }
    } 
    if (numberOfUsers === 5) {
      button = startGame()
    } 

  return (
    <div>
      {button}
    </div>
  )
}

export default JoinStartButton;
