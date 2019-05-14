import React from 'react';

const Card = (props) => {
  console.log('card: ', props)

  return (
    <div>
      {props.isList}
    </div>
  );
};

export default Card;