import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    const {currentLocation} = this.props

    return (
      <div className="sidebar">
        <h2 className="sidebar__title">Locations</h2>
        <input
          className="filter-locations"
          type="text"
          name="query"
          placeholder="Filter locations"
          value={this.props.query}
          onChange={(event) => this.props.updateQuery(event.target.value)}
        />
        {currentLocation && (
          <div className="location">
            {currentLocation.bestPhoto && (
              <div className="location__img">
                <img
                  src={currentLocation.bestPhoto.prefix + '300x300' + currentLocation.bestPhoto.suffix}
                  alt={currentLocation.name}
                />
              </div>
            )}
            <div className="location__content">
              <h3 className="location__name">{currentLocation.name}</h3>
              <p>{currentLocation.location.formattedAddress[0]}</p>
              {currentLocation.contact && (
                <p>{currentLocation.contact.formattedPhone}</p>
              )}
              {currentLocation.url && (
                <p className="location__url">
                  <a href={currentLocation.url}>{currentLocation.url}</a>
                </p>
              )}
              <p className="location__btn">
                <a href={currentLocation.canonicalUrl} target="_blank">View in Foursquare</a>
              </p>
            </div>
          </div>
        )}
        <ul className="locations-list">
          {this.props.locations.map((location) => {

            let className = 'locations-list__item'
            className += currentLocation && currentLocation.id === location.venueId ? ' is-active' : ''

            return (
              <li
                className={className}
                key={location.venueId}
                onClick={() => this.props.updateCurrentLocation(location.venueId)}
              >{location.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Sidebar;
