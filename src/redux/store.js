import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [logger];

    // with redux devtool
    // const store = createStore(
    //     rootReducer,
        
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //   );



export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); //We are using this to store information i.e. json objects - to preserve the data while we are still in session. Make sure to install the redux-persist node module and import -  import { persistStore } from 'redux-persist'; Set up here and procede to the root reducer for more config.

export default {store, persistor};