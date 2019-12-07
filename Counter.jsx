import React, { Component } from "react";
import Card from "./Card"
import Like from "./like.png"

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count+1 });
  };

  render() {
    return (
      <div className="Counter">
        <button onClick= {this.incrementCount}> <img src={Like} alt="likebutton" width="18px" height="20px"/> {this.state.count}</button>
      </div>
    );
  }
}

export default Counter;
