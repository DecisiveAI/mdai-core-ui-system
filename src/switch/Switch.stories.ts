import type { Meta, StoryObj } from "@storybook/svelte";

import Switch from "./Switch.svelte";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    icons: { control: "boolean" },
  },
} satisfies Meta<Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: false,
    label: "Switch",
  },
};
