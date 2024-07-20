import { Copyright } from "@mui/icons-material";
import { Button, Container, Grid, Paper } from "@mui/material";
import { riceData } from "../data/menuItems";
import Order from "../components/Order";

export default function HistoryPage() {

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', mb: 2}}>
                  <Order menuDataArr={riceData} orderNum={0} />
                </Paper>
                <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', mb: 2 }}>
                  <Order menuDataArr={riceData} orderNum={1} />
                </Paper>
                <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', mb: 2 }}>
                  <Order menuDataArr={riceData} orderNum={2} />
                </Paper>
                <Grid item xs={12} justifyContent="flex-end" display="flex">
                    <Button variant="contained" color="error">Clear All History</Button>
                </Grid>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
    )
}