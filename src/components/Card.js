import React from 'react';

const Card = (props) => {
  const { sortBy, itemData } = props
  console.log('sortBy, itemData: ', sortBy, itemData);
  

  return (
       <div>
      {props.isCard}
     </div>
  );
};

export default Card;