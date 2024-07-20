import { Typography, Grid, List, Paper, Divider, Box } from "@mui/material";
import CartItem from "../components/CartItem";
import { useAppSelector } from "../hooks";
import React, { useMemo } from "react";

export default function CartPage() {

  const items = useAppSelector(state => state.cart.items)
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

    return (
      <Grid container>
        <Grid item xs={6} md={4} margin={3}>
          <Paper elevation={3}>
          <List>
              {cartList}
          </List>
          <Box display="flex" justifyContent="flex-end" padding={2}>
            <Typography>
              Total: ${totalPrice} NTD
            </Typography>
          </Box>
          </Paper>
        </Grid>
      </Grid>
    )
}