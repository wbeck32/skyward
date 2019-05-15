import React from 'react';

const Card = (props) => {
  const { sortBy, itemData } = props
  console.log('sortBy: ', sortBy);

  return (
    <div className="card">
      {itemData.map(item =>
        <div key={item.id}>
          {item.title}
        </div>
      )}
    </div>
  );
};

export default Card;