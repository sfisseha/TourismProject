import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";

class sort extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      price: "None",
    };
  }

   /*
   * This function gets called every time a new filter type is selected in the dropdown. Your job is to handle the state
   * changes that should occur when a new filter type is selected.
   */
  onSelectFilterType = event => {
    //TODO Set the state of the filter type in this.state
    this.setState({ price: event});
  };

  /*
   * This function should determine whether the item being passed in matches the type
   * that we are filtering on. Remember that the selected type we are filtering on is stored
   * in this.state!
   * Input: An element from your List component
   * Output: true or false
   */
  matchesFilterPrice = item => {
    // TODO: add conditions to check if item type is equal to selected type
    if(this.state.price === "None"){
      return true;
    }else if(this.state.price === item.price){
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
  filterAndSearch = item => {
    return item.name.toLowerCase().search(this.state.search) !== -1 && this.matchesFilterType(item);
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Destination Search</h1>
        {/* TODO: Add more menu items with onSelect handlers*/}
        <DropdownButton title="Type" id="dropdown-basic-button">
        <Dropdown.Item eventKey="all" onSelect={this.onSelectFilterType}>
            All
        </Dropdown.Item>
        <Dropdown.Item eventKey="Nature" onSelect={this.onSelectFilterType}>
            Nature
        </Dropdown.Item>
        <Dropdown.Item eventKey="Historical Places" onSelect={this.onSelectFilterType}>
            Historical Places
          </Dropdown.Item>
          <Dropdown.Item eventKey="Museums & Activities" onSelect={this.onSelectFilterType}>
            Museums & Activities
          </Dropdown.Item>
        </DropdownButton>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterAndSearch)} />
      </div>
    );
  }
}

export default FilteredList;
