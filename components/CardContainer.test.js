/**
 * @jest-environment jsdom
 */

import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import { initialize, mswDecorator } from "msw-storybook-addon";

import * as stories from "./CardContainer.stories";
const { Primary } = composeStories(stories);

describe("CardContainer", () => {
  let server;

  beforeAll(() => (server = initialize()));
  afterAll(() => server.close());
  afterEach(cleanup);

  test("do something", async () => {
    render(
      mswDecorator(Primary, {
        args: { id: 1 },
        parameters: Primary.parameters,
      })
    );
    expect(await screen.findByText("Hello Storybook!")).toBeTruthy();
  });
});
