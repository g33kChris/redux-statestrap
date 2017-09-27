const React = require('react');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;

const stateStrap = (state, Container) => {
  const bootstrappedStore = createStore(() => state);
  return (
    <Provider store={bootstrappedStore}>
      <Container />
    </Provider>
  );
};

export default stateStrap;
