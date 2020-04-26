import React from 'react';
// import { useGlobalStore } from '../../store';

import './NavigationBar.scss';

// const { state } = useGlobalStore();
export const NavigationBar = () => (
  <div className="navigationbar">
    <div className="logo">Navigation Bar</div>
    <div className="right-area">
      <div className="search--bar">
        <input className="search--input" type="text" placeholder="Search posters" />
        <button type="button" className="search--button btn btn-primary">
          {' '}
          Search
        </button>
      </div>
    </div>
  </div>
);
