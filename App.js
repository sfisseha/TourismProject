import React, { Component } from "react";
import "./App.css";
import FilteredList from "./FilteredList";
import Counter from "./Counter";
import BlueNileFalls from "./BlueNileFalls.jpg"
import DanakilDepression from "./DanakilDepression.jpg"
import BaleMountain from "./BaleMountain.png"
import SimienMountain from "./SimienMountain.jpg"
import OmoNationalPark from "./OmoNationalPark.png"
import AwashNationalPark from "./AwashNationalPark.jpg"
import SofOmarCaves from "./SofOmarCaves.jpg"
import FasilGhebbi from "./FasilGhebbi.jpg"
import AxumStelae from "./AxumStelae.jpg"
import LalibelaHolyCity from "./LalibelaHolyCity.jpg"
import HararWalledCity from "./HararWalledCity.jpg"
import FeedingHyenas from "./FeedingHyenas.jpg"
import RedTerrorMuseum from "./RedTerrorMuseum.jpg"
import NationalMuseum from "./NationalMuseum.JPG"
import Merkato from "./Merkato.jpg"
import EntotoMountain from "./EntotoMountain.jpg"
import HolyTrinityCathedral from "./HolyTrinityCathedral.jpg"
import Timkat from "./Timkat.jpg"

const places = [
  { name: "Blue Nile Falls", img: BlueNileFalls, type: "Nature",location: "Bahir Dar", price:"$$", button: < Counter />},
  { name: "Danakil Depression", img: DanakilDepression, type: "Nature", location: "Afar", price:"$$", button: < Counter />},
  { name: "Fasil Ghebbi Royal Enclosure", type: "Historical Places", img: FasilGhebbi, location: "Gondor", price:"$$$", button: < Counter />},
  { name: "Bale Mountain National Park", img: BaleMountain, type: "Nature", location: "Oromia Region", price:"$", button: < Counter />},
  { name: "Sof Omar Cave", type: "Nature", img: SofOmarCaves, location: "Oromia Region", price:"$", button: < Counter />},
  { name: "Simien Mountain National Park", img: SimienMountain, type: "Nature", location: "Gondor", price:"$", button: < Counter />},
  { name: "Omo Naitional Park", type: "Nature", img: OmoNationalPark, location: "Oromia Region", price:"$", button: < Counter />},
  { name: "Awash National Park", type: "Nature", img: AwashNationalPark, location: "Oromia Region", price:"$$", button: < Counter />},
  { name: "Holy Trinity Cathedral", type: "Historical Places", img:HolyTrinityCathedral, location: "Addis Ababa", price:"$", button: < Counter />},
  { name: "Feeding Hyenas!", type: "Arts & Culture", img: FeedingHyenas, location: "Dire Dawa", price:"$", button: < Counter />},
  { name: "Axum Stelae", type: "Historical Places", img: AxumStelae, location: "Axum", price:"$$$", button: < Counter />},
  { name: "Lalibela Holy City", type: "Historical Places", img: LalibelaHolyCity, location: "Bahir Dar", price:"$$$", button: < Counter />},
  { name: "Harar Walled City", type: "Historical Places", img:HararWalledCity,  location: "Dire Dawa", price:"$$", button: < Counter />},
  { name: "Red-Terror Memorial Museum", type: "Arts & Culture", img: RedTerrorMuseum, location: "Addis Ababa", price:"$", button: < Counter />},
  { name: "National Museum of Ethiopia", type: "Arts & Culture", img: NationalMuseum, location: "Addis Ababa", price:"$", button: < Counter />},
  { name: "Shop in Merkato", type: "Arts & Culture",img: Merkato, location: "Addis Ababa", price:"$", button: < Counter />},
  { name: "Climb Entoto Mountain", type: "Nature", img: EntotoMountain, location: "Addis Ababa", price:"$", button: < Counter />},
  { name: "Epiphany (Timkat) Ceremony", type: "Arts & Culture", img: Timkat, location: "Gondor", price:"$$", button: < Counter />},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Traveling to Ethiopia?</h1>
          <u1 className="subtitle">See places you can visit in Ethiopia by type of tourist attraction, city, and price!</u1>
        </header>

      <div className= "list">
      <FilteredList items= {places} />
      </div>

      </div>
    );
  }
}

export default App;
