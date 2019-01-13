import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { getLocations } from '../utils/api'
import Map from './Map'
import Sidebar from './Sidebar'
import './App.css';

class App extends Component {
  state = {
    currentLocation: {},
    isActive: true,
    locations: [],
    query: ''
  }

  componentDidMount() {
    getLocations()
      .then(shops => {
        this.setState({
          locations: shops
        })
      })
      .catch(() => {
        alert('We couldn\'t get location data. Please try reloading the page.')
      })
  }

  /**
   * @description Display the sidebar
   */
  displaySidebar = () => {
    this.setState({isActive: true})
  }

  /**
   * @description Toggle the sidebar
   */
  toggleSidebar = () => {
    this.setState((prevState) => ({isActive: !prevState.isActive}))
  }

  /**
   * @description Update this.state.currentLocation
   * @param {string} venueId - The ID of the venue to retrieve
   */
  updateCurrentLocation = (venueId) => {

    if (this.state.currentLocation && this.state.currentLocation.id === venueId) return

    const clientId = 'YOUR_CLIENT_ID'
    const clientSecret = 'YOUR_CLIENT_SECRET'
    const v = '20180813'

    fetch(`https://api.foursquare.com/v2/venues/${venueId}?client_id=${clientId}&client_secret=${clientSecret}&v=${v}&lang=en`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({currentLocation: data.response.venue})
        this.displaySidebar()
      })
      .catch(() => {
        alert('We couldn\'t get data from Foursquare.')
      })
  }

  /**
   * @description Update this.state.query
   * @param {string} query
   */
  updateQuery = (query) => {
    this.setState({query})
  }

  render() {
    const {locations, query} = this.state
    let className, showingLocations

    className = this.state.isActive ? 'contents is-active' : 'contents'

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingLocations = locations.filter((location) => match.test(location.name))
    } else {
      showingLocations = locations
    }

    showingLocations.sort(sortBy('name'))

    return (
      <main>
        <div id="contents" className={className}>
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
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp"
            loadingElement={<div style={{height: `100%`}} />}
            containerElement={<div className="map" aria-label="Map" role="application" />}
            mapElement={<div style={{height: `100%`}} />}
          />
        </div>
        <Sidebar
          currentLocation={this.state.currentLocation}
          isActive={this.state.isActive}
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