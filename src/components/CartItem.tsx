import { ListItem, IconButton, ListItemText } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ItemInfo } from "../data/cartSlice";

export default function CartItem({
  itemInfo
}: {
  itemInfo: ItemInfo
}) {

    return (
        <ListItem
        secondaryAction={
          <React.Fragment>
            <IconButton edge="end" aria-label="add">
              <AddIcon />
            </IconButton>
            <IconButton edge="end" aria-label="minus">
              <RemoveIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
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