import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppStack from './Route';
import reducers from './Redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk)))}>
        <AppStack/>
     </Provider>
    );
  }
}

export default App;
