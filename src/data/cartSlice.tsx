import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ItemInfo {
    name: string,
    price: number,
    quantity: number,
}

interface CartState {
  items: Record<string, ItemInfo>
}

const initialState: CartState = {
  items: {}
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOneToCart: (state, action: PayloadAction<ItemInfo>) => {
      //if item is already in cart
      if(state.items.hasOwnProperty(action.payload.name)) {
        state.items[action.payload.name].quantity += 1
      } else{
        state.items[action.payload.name] = {
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1
        }
      }
    },
    removeOneFromCart: (state, action: PayloadAction<ItemInfo>) => {
      //if item not in cart
      if(!state.items.hasOwnProperty(action.payload.name)) {
        return 
      }

      //if item quantity > 1
      if(state.items[action.payload.name].quantity > 1) {
        state.items[action.payload.name].quantity -= 1
      } else{
        //else remove item 
        delete state.items[action.payload.name]
      }
    },
    removeAllFromCart: (state, action: PayloadAction<ItemInfo>) => {
      //if item in cart
      if(state.items.hasOwnProperty(action.payload.name)) {
        delete state.items[action.payload.name] 
      }
    },
  }
})

export const { addOneToCart, removeOneFromCart, removeAllFromCart } = cartSlice.actions

export default cartSlice.reducer