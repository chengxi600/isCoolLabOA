import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Typography } from '@mui/material';
import { MenuItemProps } from '../data/menuItems';
import { useEffect, useState } from 'react';

export default function Order({
  orderNum,
  menuDataArr
}: {
    orderNum: number,
    menuDataArr: MenuItemProps[]
}) {

  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  useEffect(() => {
    let total = 0;
    menuDataArr.map((menuData) => total += menuData.price)
    setTotalPrice(total)
  }, [menuDataArr])

  return (
    <React.Fragment>
      <Title>{`Order #${orderNum}`}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Food Item</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menuDataArr.map((menuData) => (
            <TableRow>
              <TableCell>{menuData.title}</TableCell>
              <TableCell>x1</TableCell>
              <TableCell align="right">{`$${menuData.price} NTD`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography align="right" padding={3}>{`Total Amount: $${totalPrice} NTD`}</Typography>
    </React.Fragment>
  );
}
