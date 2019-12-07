import React, { Component } from "react";

class ImageLayout extends Component {
      render() {

        return (
          <body>
          <Container>
          <Row><Col><h1>Most popular places to visit in Ethiopia!</h1></Col></Row>
          <Row><Col><u1>Search through by type of attraction, location and price!</u1></Col></Row>
          <Row><u2>
             <Col><li>Type of Attraction</li></Col>
             <Col><li>Location</li></Col>
             <Col><li>Sort by</li></Col>
          </u2></Row>

         <Row>
         <Col>
          <div className= "place1">
            <img src = {BlueNileFalls} alt= "blue-nile" border= "3" align= "center"/>
            <p>Blue Nile Falls</p>
          </div>
        </Col>

         <Col>
          <div className= "place2">
            <img src = {DanakilDepression} alt= "Danakil-Depression" border= "3" align= "center"/>
            <p>Danakil Depression</p>
          </div>
        </Col>
        </Row>
        </Container>
          </body>)
      }
      }

    );
  }
}

export default ImageLayout;
