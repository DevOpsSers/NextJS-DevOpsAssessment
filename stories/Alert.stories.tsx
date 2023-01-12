import {ComponentMeta, ComponentStory} from "@storybook/react";
import Alert from "../components/Alert";

export default {
  title: "Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  label: "There was an error creating the recipe",
  variant: "warning",
};

export const Success = Template.bind({});
Success.args = {
  label: "Recipe created successfully",
  variant: "success",
};