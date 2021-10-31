import React from "react";

import Card from "./Card";

const config = {
  title: "Card",
  component: Card,
};

export default config;

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 1,
  title: "Hello EPIC Week",
  imageUrl: "https://picsum.photos/id/1/300/200",
  isFavorite: false,
};

export const LongText = Template.bind({});
LongText.args = {
  ...Primary.args,
  title: "Hello EPIC Week I hope you had a great weekend",
};

export const Favorite = Template.bind({});
Favorite.args = {
  ...Primary.args,
  isFavorite: true,
};

export const NotFavorite = Template.bind({});
NotFavorite.args = {
  ...Primary.args,
  isFavorite: false,
};
