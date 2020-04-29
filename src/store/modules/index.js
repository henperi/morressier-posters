import { appReducer, appInitialState } from './init/reducer';
import { searchReducer, searchInitialState } from './search/reducer';
import { posterReducer, posterInitialState } from './poster/reducer';

export const initialState = {
  app: appInitialState,
  search: searchInitialState,
  poster: posterInitialState,
};

export const rootReducer = (state, action) => {
  const { app, search, poster } = state;

  return {
    app: appReducer(app, action),
    search: searchReducer(search, action),
    poster: posterReducer(poster, action),
  };
};
