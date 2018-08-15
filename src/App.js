import React, { Component } from 'react';
import './App.css';

class App extends Component {
  toggleSidebar = () => {
    document.getElementById('contents').classList.toggle('is-active')
  }

  render() {
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
        <div className="sidebar">
          <h2 className="sidebar__title">Locations</h2>
          <input className="filter-locations" type="text" name="location" placeholder="Filter locations" value="" />
          <ul className="locations-list">
            <li className="locations-list__item">Location A</li>
            <li className="locations-list__item">Location B</li>
            <li className="locations-list__item">Location C</li>
            <li className="locations-list__item">Location D</li>
            <li className="locations-list__item">Location E</li>
          </ul>
        </div>
      </main>
    );
  }
}

export default App;
