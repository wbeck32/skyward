import React, { Component } from 'react';
import List from './List';
import Card from './Card';

class Display extends Component {
  constructor() {
    super();
    this.state = {
      isList: true,
      isCard: false,
      availableIds: [],
      sortBy: 'recent',
      pageType: 'news',
      itemData: []
    };
  }

  componentDidMount = (async () => {
    await this.urlData();
    const { pageType } = this.state
    let url = pageType === 'news' ? 'newstories' : 'jobstories'
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/${url}.json?print=pretty`);
    let availableIds = await response.json()
    this.setState({ availableIds })
    const itemData = await this.itemData()
    this.setState({ itemData })
  })

  urlData = () => {
    const data = window.location.pathname.split('/')
    let pageType = data[1] || this.state.pageType
    let sortBy = data[2] || this.state.sortBy
    this.setState({ pageType, sortBy })
  }

  itemData = (async () => {
    const { availableIds } = this.state
    const myData = availableIds.map(async id => {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      return response.json()
    })
    const it = await Promise.all(myData)
    return it
  })

  toggleView = () => {
    this.setState(state => ({
      isList: !state.isList,
      isCard: !state.isCard
    }))
  };

  render() {
    const { isList, isCard, sortBy, availableIds, itemData } = this.state
    return (
      <div>
        {isList &&
          <div>
            <span onClick={() => this.toggleView()}>switch to cards</span>
            <List sortBy={sortBy} availableIds={availableIds} itemData={itemData} />
          </div>}
        {isCard &&
          <div>
            <span onClick={() => this.toggleView()}>switch to list</span>
            <Card sortBy={sortBy} availableIds={availableIds} itemData={itemData} />
          </div>
        }
      </div>
    );
  }
}

export default Display;