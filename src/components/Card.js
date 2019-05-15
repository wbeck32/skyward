import React from 'react';

const Card = (props) => {
  console.log('card: ', props);

  return (
    <div> 
      {props.isCard}
     </div>
  );
};

export default Card;