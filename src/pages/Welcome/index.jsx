import React from 'react';
import './WelcomePage.scss';

export const WelcomePage = () => (
  <div className="hero">
    <div className="hero--content">
      <h3 className="title">Welcome to Morressier Posters</h3>
      <div className="search--bar">
        <input className="search--input" type="text" placeholder="Search posters" />
        <button type="button" className="search--button btn btn-primary"> Search</button>
      </div>
    </div>
  </div>
);
