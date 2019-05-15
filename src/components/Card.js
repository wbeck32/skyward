import React from 'react';
import '../static/Card.css'
import { compareValues } from '../helpers'

const Card = (props) => {
  const { sortBy, itemData } = props

  itemData.sort(compareValues(sortBy));

  return (
    <div className="container">
      {itemData.map(item =>
        <div className="item">
          <div key={item.id}>
            <a href={item.url}>{item.title}</a>
            <div className="details">
              <div className="author">by:&nbsp;{item.by}</div>
              <div className="time">time:&nbsp;{item.time}</div>
              <div className="score">score:&nbsp;{item.score}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;