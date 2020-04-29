import React, { useState, Fragment, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useGlobalStore } from '../../store';
import { searchPosters, clearSearchResults, setSearchQuery } from '../../store/modules/search/actions';

import './SearchBar.scss';

export const SearchBar = (props) => {
  const history = useHistory();
  const { dispatch, state } = useGlobalStore();
  const [isSearching, setisSearching] = useState(false);
  const [searchError, setsearchError] = useState('');

  const { defaultValue } = props;

  const [searchQuery, setsearchQuery] = useState(defaultValue);

  useEffect(() => {
    setSearchQuery(state.search.searchQuery);
  }, [state.search.searchQuery]);

  const handleSearch = async () => {
    setisSearching(true);
    setsearchError('');

    dispatch(clearSearchResults());

    const response = await dispatch(searchPosters({ query: searchQuery, offset: 0, limit: 10 }));
    setisSearching(false);

    // @ts-ignore
    if (response?.collection?.items.length > 0) {
      return history.push('/search-results');
    }

    return setsearchError('No results found');
  };
  return (
    <Fragment>
      <div className="search--bar">
        <input
          className="search--input"
          type="text"
          placeholder="Search posters"
          defaultValue={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearch} className="search--button btn btn-primary">
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </div>

      {searchError && <div className="search-error">{searchError}</div>}
    </Fragment>
  );
};
