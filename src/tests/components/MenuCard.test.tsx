import {describe, expect} from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuCard from '../../components/MenuCard';
import { riceData } from '../../data/menuItems';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { clearAllHistory } from '../../data/historySlice';
import { emptyCart } from '../../data/cartSlice';
import '@testing-library/jest-dom';


describe('Test for MenuCard', () => {

  beforeEach(() => {
    store.dispatch(clearAllHistory())
    store.dispatch(emptyCart())
  });

  it('Renders correctly for first two menucards in mock data', async () => {
    render(
      <Provider store={store}>
        <MenuCard menuData={riceData[0]} />
        <MenuCard menuData={riceData[1]} />
      </Provider>
    );

    expect(await screen.findByText("Shrimp and Chorizo Paella")).toBeVisible()
    expect(await screen.findByText("$10 NTD")).toBeVisible()
    expect(screen.getByAltText("Shrimp and Chorizo Paella")).toHaveProperty("src", riceData[0].image)

    expect(await screen.findByText("Chicken and Rice")).toBeVisible()
    expect(await screen.findByText("$12 NTD")).toBeVisible()
    expect(screen.getByAltText("Chicken and Rice")).toHaveProperty("src", riceData[1].image)
  });

  it('Displays the right quantity', async () => {
    render(
      <Provider store={store}>
        <MenuCard menuData={riceData[0]} />
      </Provider>
    );
    
    expect(await screen.findByText("Shrimp and Chorizo Paella")).toBeVisible()
    expect(await screen.findByText("In Cart: x0")).toBeVisible()

    fireEvent.click(screen.getByRole("button"))
    expect(await screen.findByText("In Cart: x1")).toBeVisible()

    fireEvent.click(screen.getByRole("button"))
    expect(await screen.findByText("In Cart: x2")).toBeVisible()
  })

  it('Displays the snackbar after pressing add to cart', async () => {
    render(
      <Provider store={store}>
        <MenuCard menuData={riceData[0]} />
      </Provider>
    );

    expect(await screen.findByText("Shrimp and Chorizo Paella")).toBeVisible()
    expect(screen.queryByRole('alert')).toBeNull()

    fireEvent.click(screen.getByRole("button"))

    expect(await screen.findByRole("alert")).toBeVisible()
  })
});