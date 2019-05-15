import React from 'react';
import '../static/Menu.css'
import SubMenu from './SubMenu'
const Menu = (props) => {
  return (
    <div>
      <div className="menu">
        <span>
          <a href='/news'>News</a>
        </span>{' '}
        <span>
          <a href='/jobs'>Jobs</a>
        </span>{' '}
      </div>
      <div>
        <SubMenu thisPage="jobs" />
      </div>
    </div >
  );
};

export default Menu;