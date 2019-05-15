import React from 'react';
import '../static/List.css'
import { compareValues } from '../helpers'

const List = (props) => {
  const { sortBy, itemData } = props

  itemData.sort(compareValues(sortBy));

  return (
    <div className="list">
      {itemData.map((item, index) =>
        <ul key={index}>
          <div key={index}>
            <a href={item.url}>{item.title}</a>
          </div>
          <div><span className="author">by:&nbsp;{item.by}</span>&nbsp;&nbsp;<span className="time">time:&nbsp;{item.time}</span>&nbsp;&nbsp;<span className="score">score:&nbsp;{item.score}</span></div>
        </ul>
      )}
    </div>
  );
};

export default List;