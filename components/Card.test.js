/**
 * @jest-environment jsdom
 */

import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./Card.stories";
const { Primary } = composeStories(stories);

afterEach(cleanup);

test("do something", () => {
  render(<Primary />);
  expect(screen.getByText("Card 1")).toBeTruthy();
});
