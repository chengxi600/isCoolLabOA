import {describe, expect} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import CartItem from '../../components/CartItem';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { clearAllHistory } from '../../data/historySlice';
import { emptyCart } from '../../data/cartSlice';
import '@testing-library/jest-dom';
import { mockItemInfo1 } from '../mockTestData';


describe('Test for Order History', () => {

  beforeEach(() => {
    store.dispatch(clearAllHistory())
    store.dispatch(emptyCart())
  });

  it('Renders correctly for an order history', async () => {
    render(
      <Provider store={store}>
        <CartItem itemInfo={mockItemInfo1}></CartItem>
      </Provider>
    );

    expect(await screen.findByText('Item 1 - $10 NTD')).toBeVisible()
    expect(await screen.findByText('x1')).toBeVisible()

    expect(await screen.findByTestId('AddIcon')).toBeVisible()
    expect(await screen.findByTestId('RemoveIcon')).toBeVisible()
    expect(await screen.findByTestId('DeleteIcon')).toBeVisible()
  });
});