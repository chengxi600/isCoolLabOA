import {describe, expect} from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { clearAllHistory } from '../../data/historySlice';
import { addOneToCart, emptyCart } from '../../data/cartSlice';
import '@testing-library/jest-dom';
import CartPage from '../../pages/CartPage';
import { mockItemInfo1 } from '../mockTestData';


describe('Test for CartPage', () => {

  beforeEach(() => {
    store.dispatch(clearAllHistory())
    store.dispatch(emptyCart())
    store.dispatch(addOneToCart(mockItemInfo1))
  });

  it('adds items to cart correctly', async () => {
    render(
      <Provider store={store}>
        <CartPage></CartPage>
      </Provider>
    );

    expect(await screen.findByText('Item 1 - $10 NTD')).toBeVisible()
    expect(await screen.findByText('x1')).toBeVisible()
    expect(await screen.findByTestId('Item 1_label')).toBeVisible()

    fireEvent.click(await screen.findByLabelText('add'))
    expect(await screen.findByText('x2')).toBeVisible()

    fireEvent.click(await screen.findByLabelText('add'))
    expect(await screen.findByText('x3')).toBeVisible()
  });

  it('subtracts items from cart correctly', async () => {
    render(
      <Provider store={store}>
        <CartPage></CartPage>
      </Provider>
    );

    expect(await screen.findByText('Item 1 - $10 NTD')).toBeVisible()
    expect(await screen.findByText('x1')).toBeVisible()
    expect(await screen.findByTestId('Item 1_label')).toBeVisible()

    fireEvent.click(await screen.findByLabelText('add'))
    expect(await screen.findByText('x2')).toBeVisible()

    fireEvent.click(await screen.findByLabelText('minus'))
    expect(await screen.findByText('x1')).toBeVisible()

    fireEvent.click(await screen.findByLabelText('minus'))
    expect(screen.queryByTestId('Item 1_label')).toBeNull()
  });

  it('removes item in cart correctly', async () => {
    render(
      <Provider store={store}>
        <CartPage></CartPage>
      </Provider>
    );

    expect(await screen.findByText('Item 1 - $10 NTD')).toBeVisible()
    expect(await screen.findByText('x1')).toBeVisible()
    expect(await screen.findByTestId('Item 1_label')).toBeVisible()

    fireEvent.click(await screen.findByLabelText('add'))
    expect(await screen.findByText('x2')).toBeVisible()

    fireEvent.click(await screen.findByLabelText('delete'))
    expect(screen.queryByTestId('Item 1_label')).toBeNull()
  });

  it('Displays the snackbar after pressing submit order', async () => {
    render(
      <Provider store={store}>
        <CartPage></CartPage>
      </Provider>
    );

    expect(screen.queryByRole('alert')).toBeNull()
    fireEvent.click(screen.getByTestId("ShoppingCartIcon"))
    expect(await screen.findByRole("alert")).toBeVisible()
  })

  it('Clears cart after placing order', async () => {
    render(
      <Provider store={store}>
        <CartPage></CartPage>
      </Provider>
    );

    expect(await screen.findByText('Item 1 - $10 NTD')).toBeVisible()
    expect(await screen.findByText('x1')).toBeVisible()
    expect(await screen.findByTestId('Item 1_label')).toBeVisible()

    fireEvent.click(screen.getByTestId("ShoppingCartIcon"))

    expect(screen.queryByTestId('Item 1_label')).toBeNull()
  })
});