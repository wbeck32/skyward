import { Component } from 'react';


class Items extends Component() {
  constructor() {
    super();
    this.state = {
      articleIds: [],
      view: 'list'
    };
  }

  fetchedIds = (async () => {
    // const ids = await


  })


  componentDidMount() {
    this.setState = { articleIds: this.fetchedIds() };
  }

  render() {
    return (
      { state }
    );
  }
}

export default Items;
