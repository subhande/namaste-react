import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

import MOCK_DATA from "../mocks/mockResMenu.json";

import Cart from "../Cart";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should load Restaurent Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const accorDionHeader = screen.getByText("Chutneys & Sambar (5)");
  fireEvent.click(accorDionHeader);

  const foodItem = screen.getAllByTestId("foodItem");
  expect(foodItem.length).toBe(5);

  const addToCartBtn = screen.getAllByRole("button", { name: "Add +" });
  expect(addToCartBtn.length).toBe(5);

  fireEvent.click(addToCartBtn[0]);

  const cartItems = screen.getByText("Cart - (1 items)");
    expect(cartItems).toBeInTheDocument();
});
