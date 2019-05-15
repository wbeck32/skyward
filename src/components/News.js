// import Items from './Items';
import React, { Component } from 'react';

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
const availableIds = await fetch(``);
this.setState({availableIds})
})

  render() {
    console.log('news: ', this.state)

    // const { isList, isCard, availableIds, sortBy } = this.state
    return (
      <div>
        <div className="items">
        news
        </div>
        </div>
        );
      }
    }

    export default News;
    // <Items isList={isList} isCard={isCard} availableIds={availableIds} sortBy={sortBy}/>