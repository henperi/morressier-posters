import { types } from './types';

/**
 * @type {{
 * event: import('../search/reducer').Event | {},
 * poster: import('../search/reducer').Poster | {},
 * users: import('../search/reducer').User | {}[]
 * }}
 */

export const posterInitialState = {
  event: {},
  poster: {},
  users: [],
};

export const posterReducer = (state = posterInitialState, action) => {
  switch (action.type) {
    case types.SET_POSTER:
      return action.payload.data;
    default:
      return state;
  }
};
