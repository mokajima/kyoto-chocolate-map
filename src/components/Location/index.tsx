import React, { FC } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobeAsia,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons'

// model
import { Venue } from 'services/foursquare/models'

// theme
import theme from 'theme'

type Props = {
  location: Venue
}

const Container = styled('div')`
  background: ${theme.white};
  border-radius: 4px;
  margin-bottom: 20px;
  overflow: hidden;
`

const Image = styled('img')`
  height: 200px;
  object-fit: cover;
  vertical-align: middle;
  width: 100%;
`

const Content = styled('div')`
  align-items: flex-start;
  color: ${theme.black};
  display: flex;
  flex-direction: column;
  padding: 10px;

  p {
    align-items: center;
    display: flex;
    font-size: 14px;
    line-height: 1.4;
    margin: 0 0 0.5rem;
  }
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

const Name = styled('h3')`
  color: ${theme.chocolate.dark};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 0.5rem;
`

const Url = styled('a')`
  word-break: break-all;
`

const Button = styled('a')`
  align-self: center;
  background: ${theme.chocolate.milk};
  color: ${theme.white};
  display: inline-block;
  height: 45px;
  line-height: 45px;
  text-align: center;
  text-decoration: none;
  width: 180px;

  &:hover {
    background: ${theme.chocolate.white};
    color: ${theme.chocolate.dark};
    text-decoration: underline;
  }
`

const Location: FC<Props> = ({ location }) => (
  <Container>
    {location.bestPhoto && (
      <Image
        src={`${location.bestPhoto.prefix}300x300${location.bestPhoto.suffix}`}
        alt={location.name}
      />
    )}
    <Content>
      <Name>{location.name}</Name>
      <p>
        <Icon icon={faMapMarkerAlt} />
        {location.location.formattedAddress[0]}
      </p>
      {location.contact?.formattedPhone && (
        <p>
          <Icon icon={faPhone} />
          {location.contact.formattedPhone}
        </p>
      )}
      {location.url && (
        <p>
          <Icon icon={faGlobeAsia} />
          <Url href={location.url} target="_blank" rel="noopener noreferrer">
            {location.url}
          </Url>
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
