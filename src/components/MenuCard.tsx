import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions, IconButton, Snackbar, Alert } from "@mui/material";
import { MenuItemProps } from "../data/menuItems";
import { useAppSelector, useAppDispatch } from '../hooks'
import { addOneToCart } from "../data/cartSlice";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import { ItemInfo } from "../data/cartSlice";


export default function MenuCard({
    menuData
}: {
    menuData: MenuItemProps
}) {

    const { title, image, description, price } = menuData
    const [open, setOpen] = React.useState(false);
    const quantity = useAppSelector((state) => {
      if(state.cart.items.hasOwnProperty(title)) {
        return state.cart.items[title].quantity
      } else{
        return 0
      }
    })
    const dispatch = useAppDispatch()

    const handleClick = () => {
      setOpen(true);

      //add to cart
      const item: ItemInfo = {
        name: title,
        price: price,
        quantity: 0
      }
      dispatch(addOneToCart(item))
    };

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
              <Typography>In Cart: x{quantity}</Typography>
              <Snackbar
                  open={open}
                  autoHideDuration={1000}
                  onClose={() => setOpen(false)}
              >
                  <Alert variant="filled" severity="success">Added to Cart!.</Alert>
              </Snackbar>
            </CardActions>
        </Card>
      );
}