import React, { Component } from 'react';
import Sidebar from './Sidebar'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import './App.css';

class App extends Component {
  state = {
    currentLocation: '',
    locations: [],
    query: ''
  }

  componentDidMount() {
    fetch('locations.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          locations: data.shops
        })
      })
  }

  toggleSidebar = () => {
    document.getElementById('contents').classList.toggle('is-active')
  }

  updateCurrentLocation = (venueId) => {

    if (this.state.currentLocation && this.state.currentLocation.id === venueId) return

    const clientId = 'AOGK0IYX14B50BVIDNSYC2WKGESQD3BUG2JU1DGMFEWP5030'
    const clientSecret = 'I2R5NC0OWSTFPKNHDJE4G32VJPLVI5TTPONNOD1VYLT0CYEZ'
    const v = '20180813'

    fetch(`https://api.foursquare.com/v2/venues/${venueId}?client_id=${clientId}&client_secret=${clientSecret}&v=${v}&lang=en`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          currentLocation: data.response.venue
        })
      })
  }

  updateQuery = (query) => {
    this.setState({query})
  }

  render() {
    const {locations, query} = this.state
    let showingLocations

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingLocations = locations.filter((location) => match.test(location.name))
    } else {
      showingLocations = locations
    }

    showingLocations.sort(sortBy('name'))

    return (
      <main>
        <div id="contents" className="contents is-active">
          <header className="header">
            <h1 className="header__title">Kyoto Chocolate Map</h1>
            <button className="header__btn" onClick={this.toggleSidebar}>
              <span>Hide Navigation</span>
            </button>
          </header>
          <div id="map" className="map"></div>
        </div>
        <Sidebar
          currentLocation={this.state.currentLocation}
          locations={showingLocations}
          query={query}
          updateCurrentLocation={this.updateCurrentLocation}
          updateQuery={this.updateQuery}
        />
      </main>
    );
  }
}

export default App;
