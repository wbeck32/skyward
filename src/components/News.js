import Items from './Items';
import React, { Component } from 'react';

class News extends Component {
  constructor() {
    super();
    this.state = {
      isList: false,
      isCard: true,
      availableIds: []
    };
  }

  toggleView = (e) => {
    e.preventDefault();
    this.setState(state => ({
      isList: !state.isList,
      isCard: !state.isCard
    }))
  }

  componentDidMount = () => {

  }

  render() {
    const { isList, isCard, availableIds } = this.state
    return (
      <div>
        <div className='toggleView'>
          <button onClick={this.toggleView}>toggle view {isList ? 'change to card' : 'change to list'}</button>
        </div>
        <div className="items">
          <Items isList={isList} isCard={isCard} availableIds={availableIds} />
        </div>
      </div>
    );

  }
}
export default News;