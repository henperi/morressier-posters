export const dispatchHelper = (dispatch, state) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, state);
  }

  return dispatch(action);
};
