import { Copyright } from "@mui/icons-material";
import { Alert, Button, Container, Grid, Paper, Snackbar } from "@mui/material";
import OrderHistory from "../components/OrderHistory";
import { useAppDispatch, useAppSelector } from "../hooks";
import { clearAllHistory, Order } from "../data/historySlice";
import React from "react";

/**
 * History page for past orders submitted by user.
 */
export default function HistoryPage() {

  //get history from store
  const history: Order[] = useAppSelector((state) => state.history)
  const dispatch = useAppDispatch()

  //states for snackbar
  const [open, setOpen] = React.useState(false);

    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* list of past orders */}
            <Grid item xs={12}>
              {history.map((order, index) => (
                <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', mb: 2}}>
                  <OrderHistory order={order} orderNum={index+1} />
                </Paper>
              ))}
              {/* Clearing history */}
              <Grid item xs={12} justifyContent="flex-end" display="flex">
                  <Button 
                    variant="contained" 
                    color="error" 
                    onClick={() => {
                      dispatch(clearAllHistory())
                      setOpen(true)
                    }}
                  >Clear All History</Button>
              </Grid>
              <Snackbar
                  open={open}
                  autoHideDuration={1000}
                  onClose={() => setOpen(false)}
              >
                  <Alert variant="filled" severity="success">Cleared History!</Alert>
              </Snackbar>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
    )
}