import { types } from './types';
import { httpService } from '../../../services/httpService';
import { axiosErrorHandler } from '../../../helpers/axiosErrorHandler';

/**
 * @description method to set the search query in store
 * @param {string} searchQuery
 * @returns {object} reducer action type and payload
 */
export const setSearchQuery = (searchQuery) => {
  localStorage.setItem('searchQuery', searchQuery);

  return {
    type: types.SET_SEARCH_QUERY,
    payload: {
      searchQuery,
    },
  };
};

/**
 * @description method to set the search results in the store
 * @param {object} results
 * @returns {object} reducer action type and payload
 */
export const setSearchResults = (results) => {
  localStorage.setItem('searchResults', JSON.stringify(results));

  return ({
    type: types.SET_SEARCH_RESULTS,
    payload: {
      results,
    },
  });
};

/**
 * @description method to clear the search results
 * @returns {object} reducer action type and payload
 */
export const clearSearchResults = () => ({
  type: types.CLEAR_SEARCH_RESULTS,
});

/**
 * @description A api request action to search posters
 * @typedef {{
 *  query: string,
 *  offset: number?,
 *  limit: number?,
 * }} SearchParams
 * @param {SearchParams} searchParams
 * @returns {Function} dispatch an action
 */
export const searchPosters = ({ query, offset = 0, limit = 10 }) => async (dispatch) => {
  try {
    const { data } = await httpService.get(
      `/v3/posters/search?query=${query}&offset=${offset}&limit=${limit}`,
    );
    // console.log(data);

    dispatch(setSearchQuery(query));
    dispatch(setSearchResults(data));

    return data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return axiosErrorHandler(error, dispatch);
  }
};
