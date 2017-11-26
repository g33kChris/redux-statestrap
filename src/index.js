const React = require('react');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;

const stateStrap = (state, Container, preloadedState = {}, composeEnhancers) => {
  const bootstrappedStore = createStore(() => state, preloadedState, (composeEnhancers && composeEnhancers()));
  return (
    <Provider store={bootstrappedStore}>
      <Container />
    </Provider>
  );
};

export default stateStrap;
