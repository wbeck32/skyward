import React from 'react';
import '../static/Menu.css';
import SubMenu from './SubMenu';

const Menu = (props) => {
  const thisPage = window.location.pathname.split('/')[1]

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
        <SubMenu thisPage={thisPage} />
      </div>
    </div>
  );
};
export default Menu;