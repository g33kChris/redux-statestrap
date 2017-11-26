const React = require('react');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;

export const enhancedStateStrap = (composeEnhancers) => {
  const stateStrap = (state, Container) => {
    const bootstrappedStore = createStore(
      () => state,
      composeEnhancers && composeEnhancers()
    );
    return (
      <Provider store={bootstrappedStore}>
        <Container />
      </Provider>
    );
  };

  return stateStrap;
};

const stateStrap = enhancedStateStrap(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

export default stateStrap;
