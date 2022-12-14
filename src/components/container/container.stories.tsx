import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container as Component } from "..";

export default {
  title: "Components/Container",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "black",
  paddingBottom: "100px",
  paddingTop: "100px",
};
