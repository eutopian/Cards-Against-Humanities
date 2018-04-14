import React from 'react';
import Player from './Player';

const Players = ({users}) => {
  let list = [];

  for (let i = 0; i < 5; i++) {
    list.push(<Player key={i} users={users} />)
  }
  return (
    <div id='playerList'>Player List{list}</div>
  )
}

export default Players;
