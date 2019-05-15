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
      sortBy: 'recent'
    };
  }

  componentDidMount = (async () => {
    this.sort()
    const availableIds = await fetch(``);
    this.setState({ availableIds })
  })

  sort = () => {
    const sortBy = window.location.pathname.split('/')[2]
    this.setState({ sortBy })
  }

  toggleView = () => {
    this.setState(state => ({
      isList: !state.isList,
      isCard: !state.isCard
    }))
  };

  render() {
    console.log('jobs: ', this.state)
    const { isList, isCard, availableIds } = this.state
    return (
      <div>
        {isList &&
          <div>
            <span onClick={() => this.toggleView()}>switch to cards</span>
            <List sortBy={() => this.sort()} availableIds={availableIds} />
          </div>}
        {isCard &&
          <div>
            <span onClick={() => this.toggleView()}>switch to list</span>
            <Card sortBy={() => this.sort()} availableIds={availableIds} />
          </div>
        }
      </div>
    )
  }
}

export default Jobs;