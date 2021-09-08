import React from "react";
import { action } from "@storybook/addon-actions";

import Card from "./Card";

const config = {
  title: "Card",
  component: Card,
};

export default config;

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Card Title",
  imageUrl: "https://picsum.photos/id/1/300/200",
  isFavorite: false,
  favoriteClickHandler: action("favoriteClickHandler"),
};

export const Favorite = Template.bind({});
Favorite.args = {
  ...Primary.args,
  isFavorite: true,
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  ...Primary.args,
  title: "This card is an extremely long title that causes wrapping",
};
