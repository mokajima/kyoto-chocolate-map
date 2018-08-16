import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Location extends Component {
  render() {
    const {location} = this.props

    return (
      <div className="location">
        {location.bestPhoto && (
          <div className="location__img">
            <img
              src={location.bestPhoto.prefix + '300x300' + location.bestPhoto.suffix}
              alt={location.name}
            />
          </div>
        )}
        <div className="location__content">
          <h3 className="location__name">{location.name}</h3>
          <p>{location.location.formattedAddress[0]}</p>
          {location.contact && (
            <p>{location.contact.formattedPhone}</p>
          )}
          {location.url && (
            <p className="location__url">
              <a href={location.url}>{location.url}</a>
            </p>
          )}
          <p className="location__btn">
            <a href={location.canonicalUrl} target="_blank">View in Foursquare</a>
          </p>
        </div>
      </div>
    )
  }
}

Location.propTypes = {
  location: PropTypes.object.isRequired
}

export default Location;
