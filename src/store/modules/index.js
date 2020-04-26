import { appReducer, appInitialState } from './init/reducer';
import { searchReducer, searchInitialState } from './search/reducer';

export const initialState = {
  app: appInitialState,
  search: searchInitialState,
};

export const rootReducer = (state, action) => {
  const { app, search } = state;

  return {
    app: appReducer(app, action),
    search: searchReducer(search, action),
  };
};
