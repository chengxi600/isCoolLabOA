import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Typography } from '@mui/material';
import { Order } from '../data/historySlice';

/**
 * Component for a single order history.
 * @param orderNum the order number
 * @param order an Order with data to be displayed in the order history table
 */
export default function OrderHistory({
  orderNum,
  order
}: {
    orderNum: number,
    order: Order
}) {

  //construct list of order items
  let historyList = [];
  for(let prop in order.order) {
    historyList.push(
      <TableRow>
        <TableCell>{order.order[prop].name}</TableCell>
        <TableCell>x{order.order[prop].quantity}</TableCell>
        <TableCell align="right">{`$${order.order[prop].price} NTD`}</TableCell>
      </TableRow>
    )
  }

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
          {historyList}
        </TableBody>
      </Table>
      <Typography align="right" padding={3}>{`Total Amount: $${order.totalPrice} NTD`}</Typography>
    </React.Fragment>
  );
}
