import {describe, expect} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import OrderHistory from '../../components/OrderHistory';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { clearAllHistory } from '../../data/historySlice';
import { emptyCart } from '../../data/cartSlice';
import '@testing-library/jest-dom';
import { mockOrder1 } from '../mockTestData';


describe('Test for OrderHistory', () => {

  beforeEach(() => {
    store.dispatch(clearAllHistory())
    store.dispatch(emptyCart())
  });

  it('Renders correctly for an order history', async () => {
    render(
      <Provider store={store}>
        <OrderHistory orderNum={1} order={mockOrder1}></OrderHistory>
      </Provider>
    );

    //headers
    expect(await screen.findByText('Order #1')).toBeVisible()
    expect(await screen.findByText('Food Item')).toBeVisible()
    expect(await screen.findByText('Quantity')).toBeVisible()
    expect(await screen.findByText('Sale Amount')).toBeVisible()

    //orders
    expect(await screen.findByText('Item 1')).toBeVisible()
    expect(await screen.findByText('Item 2')).toBeVisible()
    expect(await screen.findByText('Item 3')).toBeVisible()
  });
});