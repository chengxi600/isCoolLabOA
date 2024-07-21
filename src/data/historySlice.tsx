import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemInfo } from './cartSlice'

export interface Order {
  order: Record<string, ItemInfo>
  totalPrice: number
}

const initialState: Order[] = []

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    //adds a given order to history 
    addToHistory: (state, action: PayloadAction<Order>) => {
      //if cart not empty, add order to history array
      if(Object.keys(action.payload.order).length !== 0) {
        state.push(action.payload)
      }
    },
    //clears all history
    clearAllHistory: () => {
      return initialState
    },
  }
})

export const { addToHistory, clearAllHistory } = historySlice.actions

export default historySlice.reducer