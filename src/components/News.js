import Items from './Items';
import React, { Component } from 'react';

class News extends Component {
  constructor() {
    super();
    this.state = {
      availableIds: [],
    };
  }


  componentDidMount = (async () => {
const availableIds = await fetch(``);
this.setState({availableIds})
})

  render() {
    console.log('news: ', this.state)

    const { availableIds } = this.state
    return (
      <div>
        <div className="items">
        news
          <Items availableIds={availableIds}/>
        </div>
      </div>
    );
  }
}

export default News;