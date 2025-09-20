import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});

test("renders main app container", () => {
  render(<App />);
  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeInTheDocument();
});
