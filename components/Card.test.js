/**
 * @jest-environment jsdom
 */

import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Card from "./Card";

afterEach(cleanup);

test("clicking favorite button fires callback", async () => {
  const callback = jest.fn();

  render(<Card title="Test Title" favoriteClickHandler={callback} />);
  expect(screen.getByText("Test Title")).toBeTruthy();

  const favoriteBtn = await screen.findByTestId("favoriteBtn");
  await fireEvent.click(favoriteBtn);
  expect(callback).toHaveBeenCalled();
});
