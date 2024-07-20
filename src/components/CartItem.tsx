import { ListItem, IconButton, ListItemText } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addOneToCart, ItemInfo, removeAllFromCart, removeOneFromCart } from "../data/cartSlice";
import { useAppDispatch } from "../hooks";

export default function CartItem({
  itemInfo
}: {
  itemInfo: ItemInfo
}) {

  const dispatch = useAppDispatch()

  return (
      <ListItem
      secondaryAction={
        <React.Fragment>
          <IconButton edge="end" aria-label="add" onClick={() => dispatch(addOneToCart(itemInfo))}>
            <AddIcon />
          </IconButton>
          <IconButton edge="end" aria-label="minus" onClick={() => dispatch(removeOneFromCart(itemInfo))}>
            <RemoveIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => dispatch(removeAllFromCart(itemInfo))}>
            <DeleteIcon />
          </IconButton>
        </React.Fragment>
      }
    >
      <ListItemText
        primary={`${itemInfo.name} - $${itemInfo.price} NTD`}
        secondary={`x${itemInfo.quantity}`}
      />
    </ListItem>
  )
}