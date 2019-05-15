import React from 'react';
import '../static/List.css'
import { compareValues } from '../helpers'

const List = (props) => {
  const { sortBy, itemData } = props
  console.log('itemData: ', Object.values(itemData));
  console.log('sortBy: ', sortBy);

  itemData.sort(compareValues(sortBy));

  return (
    <div className="list fluid-type">
      {itemData.map(item =>
        <ul>
          <div key={item.id}>
            <a href={item.url}>{item.title}</a>
          </div>
          <div><span className="author">by:&nbsp;{item.by}</span>&nbsp;&nbsp;<span className="time">time:&nbsp;{item.time}</span>&nbsp;&nbsp;<span className="score">score:&nbsp;{item.score}</span></div>
        </ul>
      )}
    </div>
  );
};

export default List;