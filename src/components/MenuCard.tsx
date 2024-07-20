import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions, IconButton, Snackbar, Alert } from "@mui/material";
import { MenuItemProps } from "../data/menuItems";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import React from "react";


export default function MenuCard({
    menuData
}: {
    menuData: MenuItemProps
}) {

    const { title, image, description, price } = menuData
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    const action = (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );

    return (
        <Card elevation={3} sx={{ maxWidth: 345, height: "100%", display: "flex", flexDirection: "column" }}>
          <CardHeader
            title={title}
            subheader={`$${price} NTD`}
          />
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt={title}
          />
          <CardContent>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ mt: "auto" }}>
              <IconButton color="primary" aria-label="add to shopping cart" onClick={handleClick}>
                  <AddShoppingCartIcon />
              </IconButton>
              <Snackbar
                  open={open}
                  autoHideDuration={1000}
                  onClose={handleClose}
                  action={action}
              >
                  <Alert variant="filled" severity="success">Added to Cart!.</Alert>
              </Snackbar>
            </CardActions>
        </Card>
      );
}