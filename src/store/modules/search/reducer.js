import { types } from './types';

export const searchInitialState = {
  searchQuery: '',
};

export const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };

    default:
      return state;
  }
};
