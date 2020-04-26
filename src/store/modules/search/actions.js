import { types } from './types';

/**
 * @description method to set the search query in store
 * @param {string} searchQuery
 * @returns {object} reducer action type and payload
 */
export const setSearchQuery = (searchQuery) => {
  localStorage.setItem('searchQuery', searchQuery);

  return {
    type: types,
    payload: {
      searchQuery,
    },
  };
};
