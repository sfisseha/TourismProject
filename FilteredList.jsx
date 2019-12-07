import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import "./FilteredList.css"


class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      type: "All",
      location: "All",
      price: "None",
      empty: false
    };
  }

  /*
   * This function gets called every time a new filter type is selected in the dropdown. Your job is to handle the state
   * changes that should occur when a new filter type is selected.
   */
  onSelectFilterType = event => {
    //TODO Set the state of the filter type in this.state
    this.setState({type: event});
  };

  onSelectFilterLocation = event => {
    //TODO Set the state of the filter type in this.state
    this.setState({ location: event});
  };

  onSelectFilterPrice = event => {
    //TODO Set the state of the filter type in this.state
    this.setState({ price:event});
  };

  /*
   * This function should determine whether the item being passed in matches the type
   * that we are filtering on. Remember that the selected type we are filtering on is stored
   * in this.state!
   * Input: An element from your List component
   * Output: true or false
   */
  matchesFilterType = item => {
    if(this.state.type === "All"){
      return true;
    }else if(this.state.type === item.type){
      return true;
    }else{
      return false;
    }
  }

  matchesFilterLocation = item => {
    if(this.state.location === "All"){
      return true;
    }else if(this.state.location === item.location){
      return true;
    }else{
      return false;
    }
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */

  filter = item => {
    return (this.matchesFilterType(item) && this.matchesFilterLocation(item));
  }


  filterSort = items => {
    var array= this.props.items.filter(this.filter);

    if(this.state.price === "None"){
      return array;

    }else if(this.state.price === "Price"){
      array.sort(function(a, b){return a.price.length - b.price.length;});
      return array;
  }
}

  render() {
    const style1={
      fontWeight:'bold'
    }

    return (
      <div className="filter-list">
        {/* TODO: Add more menu items with onSelect handlers*/}
      <div className= "button-layout">
      <div className="type-of-attraction">
       <DropdownButton title="Type of Tourist Attration" id="dropdown-basic-button">
        <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterType}>
            All
        </Dropdown.Item>
        <Dropdown.Item eventKey="Nature" onSelect={this.onSelectFilterType}>
            Nature
        </Dropdown.Item>
        <Dropdown.Item eventKey="Historical Places" onSelect={this.onSelectFilterType}>
            Historical Places
          </Dropdown.Item>
          <Dropdown.Item eventKey="Arts & Culture" onSelect={this.onSelectFilterType}>
            Arts & Culture
          </Dropdown.Item>
        </DropdownButton></div>

        <div className= "location">
        <DropdownButton title="City" id="dropdown-basic-button">
        <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterLocation}>
            All
        </Dropdown.Item>
        <Dropdown.Item eventKey="Addis Ababa" onSelect={this.onSelectFilterLocation}>
            Addis Ababa
        </Dropdown.Item>
        <Dropdown.Item eventKey="Gondor" onSelect={this.onSelectFilterLocation}>
            Gondor
          </Dropdown.Item>
          <Dropdown.Item eventKey="Oromia Region" onSelect={this.onSelectFilterLocation}>
              Oromia Region
          </Dropdown.Item>
          <Dropdown.Item eventKey="Dire Dawa" onSelect={this.onSelectFilterLocation}>
            Dire Dawa
          </Dropdown.Item>
        <Dropdown.Item eventKey="Axum" onSelect={this.onSelectFilterLocation}>
            Axum
        </Dropdown.Item>
        <Dropdown.Item eventKey="Bahir Dar" onSelect={this.onSelectFilterLocation}>
            Bahir Dar
        </Dropdown.Item>
        <Dropdown.Item eventKey="Afar" onSelect={this.onSelectFilterLocation}>
            Afar
        </Dropdown.Item>
        </DropdownButton></div>

        <div className= "sort">
        <DropdownButton title="Sort by" id="dropdown-basic-button">
        <Dropdown.Item eventKey="None" onSelect={this.onSelectFilterPrice}>
            None
        </Dropdown.Item>
        <Dropdown.Item eventKey="Price" onSelect={this.onSelectFilterPrice} >
            Price
        </Dropdown.Item>
        </DropdownButton></div>
        </div>

        <div className= "naming-and-filters">
        <div className= "filter-type"><p style= {style1}>{this.state.type}</p> </div>
        <div className= "filter-location"><p style= {style1}>{this.state.location}</p></div>
        <div className= "sortby"><p style={style1}> {this.state.price}</p></div>
        </div>

        <List items={this.filterSort(this.props.items)}/>
      </div>
    );
  }
}

export default FilteredList;
