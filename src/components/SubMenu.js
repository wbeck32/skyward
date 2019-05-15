import React from 'react';
import { createBrowserHistory } from 'history'

const SubMenu = (props) => {
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
      <div className="menu submenu sortby">
        <span className="link" onClick={() => handleOrder('/recent')}>&nbsp;recent</span>&nbsp;&nbsp;||&nbsp;&nbsp;
    <span className="link" onClick={() => handleOrder('/author')}>&nbsp;author</span>&nbsp;&nbsp;||&nbsp;&nbsp;
    <span className="link" onClick={() => handleOrder('/score')}>&nbsp;score</span>
      </div>
    </div>
  );
};

export default SubMenu