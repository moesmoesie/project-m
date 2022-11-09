import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Floating as Component } from "..";

export default {
  title: "Components/Floating",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component>
    <div className="w-12 h-12 bg-black" />
  </Component>
);

export const Default = Template.bind({});
Default.args = {
  delay: 100,
};
