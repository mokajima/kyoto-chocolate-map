import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobeAsia,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import './Location.css'

const Location = props => {
  const {location} = props

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
        <p>
          <FontAwesomeIcon className="location__icon" icon={faMapMarkerAlt} />
          {location.location.formattedAddress[0]}
        </p>
        {location.contact && (
          <p>
            <FontAwesomeIcon className="location__icon" icon={faPhone} />
            {location.contact.formattedPhone}
          </p>
        )}
        {location.url && (
          <p className="location__url">
            <FontAwesomeIcon className="location__icon" icon={faGlobeAsia} />
            <a href={location.url} target="_blank" rel="noopener noreferrer">{location.url}</a>
          </p>
        )}
        <p className="location__btn">
          <a href={location.canonicalUrl} target="_blank" rel="noopener noreferrer">View in Foursquare</a>
        </p>
      </div>
    </div>
  )
}

Location.propTypes = {
  location: PropTypes.object.isRequired
}

export default Location
