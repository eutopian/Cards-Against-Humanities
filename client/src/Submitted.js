import React, { PropTypes } from  'react';

const Submitted = (props) => {
  const {subWhiteCard} = props;
  const submit;

  if (currentPlayer.blackCardJudge && allcards submitted) { //currently sudo code
    submit =  <button class="button" type="button">Submit</button>
  } 

  const  eachCard = subWhiteCard.map((card, i) => (
    <div key={i} id={i} className="cards white ">
        <p>{card}</p>
    </div>
  ));

  return (
   {eachCard}
   {submit}
  )
}

export default Submitted;