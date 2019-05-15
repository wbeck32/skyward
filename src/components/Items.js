import Menu from './Menu'
import Display from './Display'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Items extends Component {
  constructor() {
    super();
    this.state = {
      isList: true,
      isCard: false,
      availableIds: [],
      sortBy: 'recent'
    }
  };

  render() {
    return (
      <div>
        <div>
          <Menu />
        </div>
        <div className="items">
          <Router>
            <Route path={["/jobs"]} component={Display} />
            <Route path={["/news"]} component={Display} />
          </Router>
        </div>
      </div>
    )
  }
}

export default Items;