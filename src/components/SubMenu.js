import React from 'react';
import '../static/Menu.css'
import { createBrowserHistory } from 'history'

const SubMenu = (props) => {
  console.log('sm: ', props)
  const history = createBrowserHistory({
    basename: props.thisPage,
    forceRefresh: true
  });

  function handleOrder(order) {
    history.push(order, { sortBy: order })
    history.goForward()
  }

  return (
    <div>
      <div className="submenu sortby">
        <span>sort by: </span>
        <span onClick={() => handleOrder('/recent')}>recent</span>{' '}
        <span onClick={() => handleOrder('/author')}>author</span>{' '}
        <span onClick={() => handleOrder('/score')}>score</span>{' '}
      </div>
    </div>
  );
};

export default SubMenu