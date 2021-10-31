import React from "react";
import { rest } from "msw";

import CardContainer from "./CardContainer";

const config = {
  title: "CardContainer",
  component: CardContainer,
};

export default config;

const Template = (args) => <CardContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = { id: 1 };
Primary.parameters = {
  msw: [
    rest.get(
      "https://jsonplaceholder.typicode.com/photos/1",
      (req, res, ctx) => {
        return res(
          ctx.json({
            id: 1,
            title: "Mocked Title",
            url: "https://picsum.photos/id/1/300/200",
          })
        );
      }
    ),
  ],
};
