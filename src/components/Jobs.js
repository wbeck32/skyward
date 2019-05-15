import React, { Component } from 'react';
import List from './List';
import Card from './Card'

class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      isList: true,
      isCard: false,
      availableIds: [],
      sortBy: 'author'
    };
  }


  componentDidMount = (async () => {
    const availableIds = await fetch(``);
    this.setState({ availableIds })
  })

  toggleView = (e) => {
    console.log(e, this.state)
    e.preventDefault();
    this.setState(state => ({
      isList: !state.isList,
      isCard: !state.isCard
    }))
  };

  render() {
    console.log('jobs: ', this.state)
    const { isList, isCard, availableIds, sortBy } = this.state

    if (isList === true) {
      return (
        <div>
          <span onClick={(e) => this.toggleView}>switch to cards</span>
          <List availableIds={availableIds} sortBy={sortBy} />
        </div>
      )
    } else if (isCard === true) {
      return (
        <div>
          <span onClick={(e) => this.toggleView}>switch to list</span>
          <Card availableIds={availableIds} sortBy={sortBy} />
        </div >
      )
    }
  }
}
export default Jobs;