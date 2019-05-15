import React from 'react';


const List = (props) => {
  const { sortBy, itemData } = props
  console.log('sortBy: ', sortBy);

  return (
    <div>
      {itemData.map(item =>
        <div key={item.id}>
          {item.title}
        </div>

      )}
    </div>
  );

};

export default List;