# Kyoto Chocolate Map

Kyoto Chocolate Map is a web application that lists chocolate shops in Kyoto.

![Screenshot](https://mokajima.github.io/portfolio/images/kyoto-chocolate-map.jpg)

## Dependencies

- [React](https://reactjs.org/)
- [Create React App](https://github.com/facebook/create-react-app)
- [React Google Maps](https://github.com/tomchentw/react-google-maps)
- [prop-types](https://github.com/facebook/prop-types)
- [Foursquare Places API](https://developer.foursquare.com/)

## How to use

Clicking a location on the list or a marker of the location displays unique information about the location.

## Install

1. Download a zip file or clone via GitHub
2. Install all project dependencies with `npm install`
3. Start the development server with `npm start`
4. Replace `YOUR_CLIENT_ID` in `src/constants.js` with your Client ID of your Foursquare App
5. Replace `YOUR_CLIENT_SECRET` in `src/constants.js` with your Client Secret of your Foursquare App
6. Replace `YOUR_API_KEY` in `src/constants.js` with your Google API key

The service worker is only enabled in the production environment, e.g. the output of `npm run build`.
