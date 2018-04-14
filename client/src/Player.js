import React from 'react';

const Player = ({users}) => {
  let i = 0;
  const player = users[i].id;
  i++;
  return (
    <div id='player'>
      <p>Player: {player}</p>
    </div>
  )
}

export default Player;
