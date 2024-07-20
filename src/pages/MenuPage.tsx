import { Container, Divider, Grid, Link, Typography } from "@mui/material";
import MenuCard from "../components/MenuCard";
import { drinkData, noodleData, riceData } from "../data/menuItems";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function MenuPage() {

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={1}>
              {/* Menu */}
              {/* Rice */}
              <Grid item xs={12}>
                <Typography variant="h2">Rice</Typography>
              </Grid>
              {riceData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} display="flex">
                  <MenuCard menuData={item}/>
                </Grid>
              ))}
              <Divider sx={{ my: 2, width: "100%" }} />
              {/* Noodles */}
              <Grid item xs={12}>
                <Typography variant="h2">Noodles</Typography>
              </Grid>
              {noodleData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <MenuCard menuData={item}/>
                </Grid>
              ))}
              <Divider sx={{ my: 2, width: "100%" }} />
              {/* Drinks */}
              <Grid item xs={12}>
                <Typography variant="h2">Drinks</Typography>
              </Grid>
              {drinkData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <MenuCard menuData={item}/>
                </Grid>
              ))}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
    )
}