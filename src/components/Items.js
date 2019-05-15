import Card from './Card';
import List from './List';
import React, {Component} from 'react';

class Items extends Component{
  constructor() {
    super();
    this.state = {
      isList: false,
      isCard: true,
      availableIds: [],
      sortBy: 'recent'
    };
  }

  // sortBy = (e) => {
  //   e.preventDefault();
  //   this.setState(state=>{
  //     sortBy:'score'
  //   })
  // }

  // toggleView = (e) => {
  //   e.preventDefault();
  //   this.setState(state => ({
  //     isList: !state.isList,
  //     isCard: !state.isCard
  //   }))
  // }


 render(){
   console.log('this: ', this);
   const {isList,isCard,availableIds,sortBy} = this.props;

   if (isList === true) {
     return (
       <List isList={isList} availableIds={availableIds} sortBy={sortBy} />
       )
      } else {
        return <Card isCard={isCard} availableIds={availableIds} />
      }
    }
};

export default Items;
