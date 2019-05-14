import Card from './Card';
import List from './List';
import React from 'react';

const Items = (props) => {
  console.log('items: ', props.isList, props.isCard)
  //TODO: this is where to fetch availableIds? Does it need to go back to being a component?

  if (props.isList === true) {
    return (
      <List isList={props.isList} availableIds={props.availableIds} />
    )
  } else {
    return <Card isCard={props.isCard} availableIds={props.availableIds} />
  }

};

export default Items;
