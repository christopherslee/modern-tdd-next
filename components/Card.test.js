/**
 * @jest-environment jsdom
 */

import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import { initialize, mswDecorator } from "msw-storybook-addon";

import * as stories from "./Card.stories";
const { Primary } = composeStories(stories);

describe("Card", () => {
  let server;

  beforeAll(() => (server = initialize()));
  afterAll(() => server.close());
  afterEach(cleanup);

  test("do something", async () => {
    render(<Primary />);
    expect(await screen.findByText("Card Title")).toBeTruthy();
    const favoriteButton = screen.getByTestId("favoriteBtn");
    const favoriteValue = favoriteButton.getAttribute("data-favorite");
    expect(favoriteValue).toEqual("false");
  });

  test("clicking on heart saves as favorite", async () => {
    render(<Primary />);
    var favoriteButton = screen.getByTestId("favoriteBtn");
    fireEvent.click(favoriteButton);

    favoriteButton = screen.getByTestId("favoriteBtn");
    const favoriteValue = favoriteButton.getAttribute("data-favorite");
    expect(favoriteValue).toEqual("true");
  });
});
