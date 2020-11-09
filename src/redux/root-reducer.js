import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; //This import will use the local browser storage - we can also use the session storage via - import sessionStorage from 'different library'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';




const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // This lets persist know that we only want to whitelist the cart- We don't need user because that is being handled by Firebase
}

const rootReducer = combineReducers({  //This was set up to use persist - The commented code below was before we used this. We must change the default export
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

//  export default combineReducers({
//      user: userReducer,
//      cart: cartReducer
//  });

export default persistReducer(persistConfig, rootReducer); // This is the new export using persist - Procede to index.js - Before this we started in store.js