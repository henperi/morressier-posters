import React, { useEffect } from 'react';

import { initialiseStore } from './store/modules/init/actions';
import { dispatchHelper } from './helpers/dispatchHelper';
import { rootReducer, initialState } from './store/modules';
import { Provider } from './store';
import { Routes } from './routes';
import { Spinner } from './components/Spinner';
import './App.scss';

/**
 * The App component
 *
 * @returns {JSX.Element} App
 */
function App() {
  const [state, dispatchBase] = React.useReducer(rootReducer, initialState);
  const dispatch = React.useCallback(dispatchHelper(dispatchBase, state), [dispatchBase]);

  console.log(state);

  useEffect(() => {
    initialiseStore(dispatch);
  }, [dispatch]);

  // return <div className="morrieser--app">Morrieser</div>;

  return (
    <Provider state={state} dispatch={dispatch}>
      {state.app.isReady ? <Routes /> : <div className="col"><Spinner center /></div>}
    </Provider>
  );
}

export default App;
