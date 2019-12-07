import React, {Component} from 'react';
import Card from "./Card"

class List extends Component {

  renderList() {
    const items = this.props.items.map(item => {
      return <div key={item.name}><Card name={item.name} img={item.img} type={item.type}
      location={item.location} price={item.price} button={item.button}> {item.name} {item.img} {item.type}
      {item.location} {item.price} </Card></div>
    });

    const pstyle={
      color: 'white',
      fontWeight: 'bold',
      align: 'center',
      margintop: '50px'
    }

    if (items.length < 1){
      return <p className= 'no-match'> No match found for the selected filters  :( </p>;
    }else{
      return items;
    }
  }

  render() {
    return (
      <ul className= "list-of-places"> {this.renderList()} </ul>
    );
  }
}

export default List;
