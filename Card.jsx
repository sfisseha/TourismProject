import React, { Component } from "react";
import "./Card.css"

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  hoverOn = () => {
    this.setState({hover: true});
  }

  hoverOff  = () => {
    this.setState({hover: false});
  }

  render() {
    var hoverColor;
    if(this.state.hover){
      hoverColor= {color: 'orange', cursor: 'pointer'}
    }else{
      hoverColor= {color: '#ffffff'}
    }

    return(
      <div className= "card">
      <div className= "card-layout">
        <img src={this.props.img} alt={this.props.name} width='350px' height='300px' align='center' padding='5px' style={hoverColor} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}/>
        <div className= "place-name"><p style={hoverColor} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>{this.props.name}</p></div>
        <div className= "info"><p>{this.props.type} in {this.props.location} {this.props.price} </p></div>
        <div>       {this.props.button}</div>
      </div>
      </div>
    )
  }
}
export default Card;
