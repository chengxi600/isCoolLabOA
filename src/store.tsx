import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './data/cartSlice';
import historyReducer from './data/historySlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    history: historyReducer
  }
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself so no need to declare type on every usage
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']