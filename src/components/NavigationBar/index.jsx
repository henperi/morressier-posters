import React, { useState, useEffect } from 'react';

import './NavigationBar.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useGlobalStore } from '../../store';
import { SearchBar } from '../SearchBar';

export const NavigationBar = () => {
  const { state } = useGlobalStore();

  const location = useLocation();

  const [searchValue, setsearchValue] = useState(state.search.searchQuery);

  const isHome = location.pathname === '/home';

  useEffect(() => {
    setsearchValue(state.search.searchQuery);
  }, [state.search.searchQuery]);

  return (
    <div className="navigationbar">
      <NavLink to="/home" className="logo">
        Moressier Posters
      </NavLink>
      <div className="right-area">
        {!isHome && (
        <SearchBar defaultValue={searchValue} />
        )}
      </div>
    </div>
  );
};
