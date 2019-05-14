<<<<<<< HEAD
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
=======
import {Component} from 'react';
import Items from './Items';


class News extends Component{
  constructor(props) {
    super(props);
    this.state = {
      view : ''
    };
  }
  changeView = (async () => {
    //TODO: logic is not correct
    this.state.view == '' ? this.setState={view:'list'}:this.setState={view:'card'};
  })

render() {
let {view} = this.state;
return(
  <div>
  <div class='changeView'>
  <button onclick="changeView()"/>
  </div>
  <div class="items">
  <Items view = {view}/>
  </div>
  </div>
);

}
>>>>>>> ab3f4d4a9c17f36b393aa654dd89920abf8c8ad3
}
export default News;