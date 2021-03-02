import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobeAsia,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons'

// model
import { Venue } from 'services/foursquare/models'

// view
import styles from './index.module.css'

export type Props = {
  location: Venue
}

const Location: FC<Props> = ({ location }) => (
  <div className={styles.container}>
    {location.bestPhoto && (
      <img
        className={styles.image}
        src={`${location.bestPhoto.prefix}300x300${location.bestPhoto.suffix}`}
        alt={location.name}
        width={280}
        height={200}
      />
    )}
    <div className={styles.content}>
      <h3 className={styles.name}>{location.name}</h3>
      <p>
        <FontAwesomeIcon className={styles.icon} icon={faMapMarkerAlt} />
        {location.location.formattedAddress[0]}
      </p>
      {location.contact?.formattedPhone && (
        <p>
          <FontAwesomeIcon className={styles.icon} icon={faPhone} />
          {location.contact.formattedPhone}
        </p>
      )}
      {location.url && (
        <p>
          <FontAwesomeIcon className={styles.icon} icon={faGlobeAsia} />
          <a
            className={styles.url}
            href={location.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {location.url}
          </a>
        </p>
      )}
      <a
        className={styles.button}
        href={location.canonicalUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View in Foursquare
      </a>
    </div>
  </div>
)

export default Location
