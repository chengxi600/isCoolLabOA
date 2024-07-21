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
    //adds a given item to the cart
    addOneToCart: (state, action: PayloadAction<ItemInfo>) => {
      //if item is already in cart, increment quantity. Else, create new key.
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
    //removes a given item from the cart
    removeOneFromCart: (state, action: PayloadAction<ItemInfo>) => {
      //if item not in cart, do nothing
      if(!state.items.hasOwnProperty(action.payload.name)) {
        return 
      }

      //if item quantity > 1, decrement quantity. If one item left, remove from cart.
      if(state.items[action.payload.name].quantity > 1) {
        state.items[action.payload.name].quantity -= 1
      } else{
        delete state.items[action.payload.name]
      }
    },
    //remove all quantities of a given item from cart.
    removeAllFromCart: (state, action: PayloadAction<ItemInfo>) => {
      //if item in cart, remove the item from cart.
      if(state.items.hasOwnProperty(action.payload.name)) {
        delete state.items[action.payload.name] 
      }
    },
    //empties the cart of every item. 
    emptyCart: () => {
      return initialState
    }
  }
})

export const { addOneToCart, removeOneFromCart, removeAllFromCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer