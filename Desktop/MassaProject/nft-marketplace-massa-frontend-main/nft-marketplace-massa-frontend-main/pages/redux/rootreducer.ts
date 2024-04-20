import { combineReducers } from '@reduxjs/toolkit';
import walletReducer from './slices/walletSlice';

const rootReducer = combineReducers({
    wallet: walletReducer,
    // other feature reducers can be added here
});

export default rootReducer;
