import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

import RestaurantCard from "../RestaurantCard";

import MOCK_DATA from "../mocks/resCardMock.json";

it("Should load RestaurantCard Component with a login button", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Brahmins Tiffin Centre");
  expect(name).toBeInTheDocument();
});
