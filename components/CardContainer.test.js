/**
 * @jest-environment jsdom
 */

import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import { initialize, mswDecorator } from "msw-storybook-addon";

import * as stories from "./CardContainer.stories";
const { Primary } = composeStories(stories);

describe("CardContainer", () => {
  let server;

  beforeAll(() => (server = initialize()));
  afterAll(() => server.close());
  afterEach(cleanup);

  test("renders", async () => {
    render(
      mswDecorator(Primary, {
        args: { id: 1 },
        parameters: Primary.parameters,
      })
    );
    expect(await screen.findByText("Mocked Title")).toBeTruthy();
  });

  test("clicking favorite button toggles favorite status", async () => {
    render(
      mswDecorator(Primary, {
        args: { id: 1 },
        parameters: Primary.parameters,
      })
    );

    var favoriteBtn = await screen.findByTestId("favoriteBtn");
    expect(favoriteBtn.getAttribute("data-favorite")).toEqual("false");

    await fireEvent.click(favoriteBtn);

    await waitFor(() => {
      favoriteBtn = screen.getByTestId("favoriteBtn");
      expect(favoriteBtn.getAttribute("data-favorite")).toEqual("true");
    });

    await fireEvent.click(favoriteBtn);

    await waitFor(() => {
      favoriteBtn = screen.getByTestId("favoriteBtn");
      expect(favoriteBtn.getAttribute("data-favorite")).toEqual("false");
    });
  });
});
