import React from 'react';

import './WelcomePage.scss';

import { SearchBar } from '../../components/SearchBar';

export const WelcomePage = () => (
  <div className="hero">
    <div className="hero--content">
      <h3 className="title">Welcome to Morressier Posters</h3>
      <SearchBar defaultValue="" />
    </div>
  </div>
);
