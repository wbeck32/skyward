import React from 'react';


const List = (props) => {

  console.log('list: ', props)

  return (
    <div>
      {props.isList}
    </div>
  );

};

export default List;