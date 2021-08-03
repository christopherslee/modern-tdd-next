import React from "react";

import Card from "./Card";

const config = {
  title: "Card",
  component: Card,
};

export default config;

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = { id: 1 };
