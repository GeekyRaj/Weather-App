// Imports: Dependencies
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

// Imports: Redux
import reducers  from '../Redux/reducers';

// Middleware: Redux Thunk (Async/Await)
const middleware = [thunk];

// Middleware: Redux Logger (For Development)
if (process.env.NODE_ENV !== 'production') {  
  middleware.push(createLogger());
}

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'search',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
    'dataAPI',
  ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers)

// Redux: Store
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
  store,
  persistor,
};