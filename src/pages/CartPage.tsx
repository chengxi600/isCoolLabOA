import { Typography, Grid, List, Paper, Divider, Box, Button, Alert, Snackbar, IconButton } from "@mui/material";
import CartItem from "../components/CartItem";
import { useAppDispatch, useAppSelector } from "../hooks";
import React, { useMemo } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { addToHistory, Order } from "../data/historySlice";
import { emptyCart } from "../data/cartSlice";

export default function CartPage() {

  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.cart.items);
  const [open, setOpen] = React.useState(false);
  const totalPrice = useMemo(() => {
    let total = 0
    for(let prop in items) total += (items[prop].price * items[prop].quantity)
    return total
  }, [items])

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
    setOpen(true)

    const payload: Order = {
      order: items,
      totalPrice: totalPrice
    }

    //submit order
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