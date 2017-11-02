const React = require('react');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;

const stateStrap = (state, Container) => {
  const bootstrappedStore = createStore(
    () => state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={bootstrappedStore}>
      <Container />
    </Provider>
  );
};

export default stateStrap;
