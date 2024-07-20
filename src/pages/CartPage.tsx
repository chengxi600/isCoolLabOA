import { Typography, Grid, List, Paper, Divider, Box } from "@mui/material";
import CartItem from "../components/CartItem";

export default function CartPage() {

    return (
      <Grid container>
        <Grid item xs={6} md={4} margin={3}>
          <Paper elevation={3}>
          <List>
              <CartItem />
              <Divider />
              <CartItem />
              <Divider />
              <CartItem />
              <Divider />
          </List>
          <Box display="flex" justifyContent="flex-end" padding={2}>
            <Typography>
              Total: $10 NTD
            </Typography>
          </Box>
          </Paper>
        </Grid>
      </Grid>
    )
}