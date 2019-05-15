import News from './News'
import Jobs from './Jobs'
import Menu from './Menu'
import '../static/Items.css'
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
// import {createBrowserHistory, createMemoryHistory} from 'history'

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

  // toggleView = (e)=> {
  //   e.preventDefault();
  //   this.setState(state => ({
  //     isList: !state.isList,
  //     isCard: !state.isCard
  //   }))
  // };

  render() {
    return(
    <div>
      <div>
      <Menu />
      </div>
      <div>


      </div>
      <div>
      <Router>
      <div className="items">
      <Route path={["/jobs/author"]} component={Jobs} />
      <Route path={["/news/*"]} component={News} />
      </div>
      </Router>
      </div>
      </div>
      )

    }
  };

  export default Items;
