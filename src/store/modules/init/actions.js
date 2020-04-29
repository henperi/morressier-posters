/* eslint-disable import/no-cycle */
import types from './types';
import { setSearchQuery, setSearchResults } from '../search/actions';

/**
 * @description Method to start the app
 * @returns {object} reducer action type and payload
 */
export const initApp = () => ({
  type: types.INIT_APP,
});

/**
 * @description method to set the status of network error
 * @param {boolean} status
 * @returns {object} reducer action type and payload
 */
export const setNetworkError = (status) => ({
  type: types.SET_NETWORK_ERROR,
  payload: {
    status,
  },
});

/**
 * Actions to dispatch as the app bootstraps
 * @param {Function} dispatch
 *
 * @returns {void}
 */
export const initialiseStore = (dispatch) => {
  const searchQuery = localStorage.getItem('searchQuery');
  const searchResults = localStorage.getItem('searchResults');

  dispatch(initApp());
  if (searchQuery) {
    dispatch(setSearchQuery(searchQuery));

    if (searchResults) {
      dispatch(setSearchResults(JSON.parse(searchResults)));
    }
  }
};
