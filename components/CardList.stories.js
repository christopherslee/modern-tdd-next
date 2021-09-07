import React from "react";

import CardList from "./CardList";

const config = {
  title: "CardList",
  component: CardList,
};

export default config;

const Template = (args) => <CardList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cards: [1, 2, 3].map((n) => {
    return {
      id: n,
      title: `Card ${n}`,
      imageUrl: `https://picsum.photos/id/${n}/300/200`,
      isFavorite: n % 2 === 0,
    };
  }),
};
