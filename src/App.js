import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import { createStore , applyMiddleware } from 'redux';
//import ReduxThunk from 'redux-thunk';
import AppStack from './Route';
//import reducers from './Redux/reducers';
//import { composeWithDevTools } from 'redux-devtools-extension';

//Persist Store
import { PersistGate } from 'redux-persist/es/integration/react';
// Imports: Redux Persist Persister
import { persistStore, persistReducer } from 'redux-persist';
import { store , persistor } from './store/store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <AppStack/>
        </PersistGate>
     </Provider>
    );
  }
}

export default App;
