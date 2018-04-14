import React, { PropTypes } from  'react';

const Players = (props) => {
  const {eachUser, score} = props;

  return (
   <p> {eachUser} : {score}</p>
  )
}

export default Players;
