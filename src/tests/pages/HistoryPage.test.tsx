import {describe, expect} from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { addToHistory, clearAllHistory } from '../../data/historySlice';
import { addOneToCart, emptyCart } from '../../data/cartSlice';
import '@testing-library/jest-dom';
import CartPage from '../../pages/CartPage';
import { mockItemInfo1, mockItemInfo2, mockItemInfo3, mockOrder1 } from '../mockTestData';
import HistoryPage from '../../pages/HistoryPage';


describe('Test for HistoryPage', () => {
  beforeEach(() => {
    store.dispatch(clearAllHistory())
    store.dispatch(emptyCart())
  });

  it('display order history correctly after submitting cart', async () => {
    store.dispatch(addOneToCart(mockItemInfo1))
    store.dispatch(addOneToCart(mockItemInfo1))
    store.dispatch(addOneToCart(mockItemInfo2))
    store.dispatch(addOneToCart(mockItemInfo3))

    render(
      <Provider store={store}>
        <CartPage></CartPage>
        <HistoryPage></HistoryPage>
      </Provider>
    );

    fireEvent.click(screen.getByTestId("ShoppingCartIcon"))

    //headers
    expect(await screen.findByText('Order #1')).toBeVisible()
    expect(await screen.findByText('Food Item')).toBeVisible()
    expect(await screen.findByText('Quantity')).toBeVisible()
    expect(await screen.findByText('Sale Amount')).toBeVisible()

    //orders
    expect(await screen.findByText('Item 1')).toBeVisible()
    expect(await screen.findByText('x2')).toBeVisible()
    expect(await screen.findByText('Item 2')).toBeVisible()
    expect(await screen.findByText('Item 3')).toBeVisible()
  });

  it('clears order history correctly', async () => {
    store.dispatch(addToHistory(mockOrder1))

    render(
      <Provider store={store}>
        <HistoryPage></HistoryPage>
      </Provider>
    );

    expect(await screen.findByText('Order #1')).toBeVisible()
    fireEvent.click(screen.getByRole("button"))
    expect(screen.queryByText('Order #1')).toBeNull()
  });
});