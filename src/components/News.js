import React, { Component } from 'react';
import List from './List';
import Card from './Card';

class News extends Component {
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
    this.sort();
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`);
    let availableIds = await response.json()
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
    console.log('news: ', this.state)
    const { isList, isCard, availableIds, sortBy } = this.state
    return (
      <div>
        {isList &&
          <div>
            <span onClick={() => this.toggleView()}>switch to cards</span>
            <List sortBy={sortBy} availableIds={availableIds} />
          </div>}
        {isCard &&
          <div>
            <span onClick={() => this.toggleView()}>switch to list</span>
            <Card sortBy={sortBy} availableIds={availableIds} />
          </div>
        }
      </div>
    );
  }
}

export default News;