import Items from './Items';
import React, { Component } from 'react';

class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      isList: false,
      isCard: true,
      availableIds: [],
      sortBy: 'recent'
    };
  }

  // toggleView = (e) => {
  //   e.preventDefault();
  //   this.setState(state => ({
  //     isList: !state.isList,
  //     isCard: !state.isCard
  //   }))
  // }

  componentDidMount = (async () => {
    const availableIds = await fetch(``);
    this.setState({ availableIds })
  })

  render() {
    console.log('jobs: ', this.state)
    const { isList, isCard, availableIds, sortBy } = this.state
    return (
      <div className="items">
        jobs
        <Items isList={isList} isCard={isCard} availableIds={availableIds} sortBy={sortBy} />
      </div>
    );

  }
}
export default Jobs;