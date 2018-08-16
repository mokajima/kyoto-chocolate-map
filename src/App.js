import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Map from './Map'
import Sidebar from './Sidebar'
import './App.css';

class App extends Component {
  state = {
    currentLocation: {},
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
      .catch(() => {
        alert('We couldn\'t get location data. Please try reloading the page.')
      })
  }

  displaySidebar = () => {
    const contents = document.getElementById('contents')
    if (!contents.classList.contains('is-active')) {
      contents.classList.add('is-active')
    }
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
      .catch(() => {
        alert('We couldn\'t get data from Foursquare.')
      })

    this.displaySidebar()
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
          <Map
            currentLocation={this.state.currentLocation}
            locations={locations}
            updateCurrentLocation={this.updateCurrentLocation}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQjsHZq9VBKSPlfbOeTBoknSDxgqZI_z8&v=3.exp"
            loadingElement={<div style={{height: `100%`}} />}
            containerElement={<div className="map" />}
            mapElement={<div style={{height: `100%`}} />}
          />
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
