import Jobs from './Jobs'
import Menu from './Menu'
import News from './News'
import React, {Component} from 'react';
import '../static/Items.css'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class Items extends Component{
  constructor() {
    super();
    this.state = {
      isList: true,
      isCard: false,
      availableIds: [],
      sortBy: '',
    };
  }

  sortBy = (order)=> {
    // e.preventDefault();
    console.log(order)
    // this.setState({sortBy:order})

  }

  render() {
    return(
      <div>
        <div>
          <Menu />
        </div>
        <div className="items">
          <Router>
            <Route path={["/jobs/*"]} component={Jobs} />
            <Route path={["/news/*"]} component={News} />
          </Router>
        </div>
      </div>
      )
    }
  };

  export default Items;
