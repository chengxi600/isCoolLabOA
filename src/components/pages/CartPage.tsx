import { Typography, ListItem, Grid, IconButton, List, ListItemText, Paper, Divider } from "@mui/material";
import React from "react";
import CartItem from "../CartItem";

export default function CartPage() {

    return (
      <Grid container>
        <Grid item xs={6} md={4} margin={3}>
          <Paper>
          <List>
              <CartItem />
              <Divider />
              <CartItem />
              <Divider />
              <CartItem />
              <Divider />
          </List>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          </Paper>
        </Grid>
      </Grid>
    )
}