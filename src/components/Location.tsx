import React, { FC } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobeAsia,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons'

// model
import { Venue } from 'services/kyoto-chocolate-map/models'

interface Props {
  location: Venue
}

const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
  overflow: hidden;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
  vertical-align: middle;
`

const Content = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  p {
    font-size: 14px;
    line-height: 1.4;
    display: flex;
    align-items: center;
    margin: 0 0 0.5rem;
  }
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

const Name = styled.h3`
  color: #6b5344;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 0.5rem;
`

const Button = styled.a`
  align-self: center;
  background: #a79c8e;
  color: #fff;
  display: inline-block;
  line-height: 45px;
  text-align: center;
  text-decoration: none;
  width: 180px;
  height: 45px;
  &hover {
    background: #f5efde;
    color: #6b5344;
    text-decoration: underline;
  }
`

const Location: FC<Props> = ({ location }) => (
  <Container>
    {location.bestPhoto && (
      <Image
        src={location.bestPhoto.prefix + '300x300' + location.bestPhoto.suffix}
        alt={location.name}
      />
    )}
    <Content>
      <Name>{location.name}</Name>
      <p>
        <Icon icon={faMapMarkerAlt} />
        {location.location.formattedAddress[0]}
      </p>
      {location.contact && (
        <p>
          <Icon icon={faPhone} />
          {location.contact.formattedPhone}
        </p>
      )}
      {location.url && (
        <p>
          <Icon icon={faGlobeAsia} />
          <a
            href={location.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {location.url}
          </a>
        </p>
      )}
      <Button
        href={location.canonicalUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View in Foursquare
      </Button>
    </Content>
  </Container>
)

export default Location
