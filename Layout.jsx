import React, { Component } from "react";
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'

class Layout extends Component {
  constructor(props){
    super(props);

    this.state = {
      default: ""
    };
  }

  render() {
      const h1style={
        margin: '40px',
        textAlgin: 'center',
      }

      const u1style={
        margin: '10px',
        textAlgin: 'center'
      }

    return (
      <div>
      <h1 style={h1style}>Most popular places to visit in Ethiopia!</h1>
      <u1 style={u1style}>Search through by type of attraction, location and price!</u1>
      </div>)
  }
}

export default Layout;
