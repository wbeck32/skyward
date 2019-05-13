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
}
export default News;