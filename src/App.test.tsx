import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders HackerNews header", () => {
  render(<App />);
  const header = screen.getByText(/HackerNews List/i);
  expect(header).toBeInTheDocument();
});
