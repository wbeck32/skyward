import React from 'react';
import News from './News'
import Jobs from './Jobs'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';


const Menu = (props) => {
  console.log('menu: ', props)

  return (
    <div>
      <Router>
        <div className="navLinks">
          <span>
            <NavLink to={{ pathname: '/news' }}>News</NavLink>
          </span>{' '}
          <span>
            <NavLink to={{ pathname: '/jobs' }}>Jobs</NavLink>
          </span>{' '}

        </div>
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/news" component={News} />
      </Router>
    </div>
  );

};


export default Menu;