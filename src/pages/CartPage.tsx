import { Typography, Grid, List, Paper, Divider, Box, Button, Alert, Snackbar } from "@mui/material";
import CartItem from "../components/CartItem";
import { useAppDispatch, useAppSelector } from "../hooks";
import React, { useMemo } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToHistory, Order } from "../data/historySlice";
import { emptyCart } from "../data/cartSlice";

/**
 * Page where users can see their items in cart, change the quantity per item, and submit order
 */
export default function CartPage() {

  const dispatch = useAppDispatch();
  
  //cart items from store
  const items = useAppSelector(state => state.cart.items);

  //states for snackbar
  const [open, setOpen] = React.useState(false);

  //total price of items in cart
  const totalPrice = useMemo(() => {
    let total = 0
    for(let prop in items) total += (items[prop].price * items[prop].quantity)
    return total
  }, [items])

  //construct cart items
  let cartList = [];
  for(let prop in items) {
    cartList.push(
      <React.Fragment>
        <CartItem itemInfo={items[prop]} />
        <Divider/>
      </React.Fragment>
    )
  }

  const handleSubmit = () => {
    //trigger snackbar
    setOpen(true)

    const payload: Order = {
      order: items,
      totalPrice: totalPrice
    }

    //add current cart to history and empty cart
    dispatch(addToHistory(payload))
    dispatch(emptyCart())
  }

    return (
      <Grid container>
        <Grid item xs={6} md={6} margin={3}>
          <Paper elevation={3}>
          <List>
              {cartList}
          </List>
          <Box flexDirection="row" display="flex" justifyContent="space-between">
            <Box padding={2} justifyContent="flex-start">
              <Typography>
                Total: ${totalPrice} NTD
              </Typography>
            </Box>
            <Box padding={2} justifyContent="flex-end">
              <Button variant="contained" endIcon={<ShoppingCartIcon />} onClick={handleSubmit}>
                Order
              </Button>
            </Box>
            <Snackbar
                  open={open}
                  autoHideDuration={1000}
                  onClose={() => setOpen(false)}
              >
                  <Alert variant="filled" severity="success">Order Submitted!</Alert>
              </Snackbar>
          </Box>
          </Paper>
        </Grid>
      </Grid>
    )
}