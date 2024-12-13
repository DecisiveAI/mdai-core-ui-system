import type { Meta, StoryObj } from "@storybook/svelte";

import Checkbox from "./Checkbox.svelte";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
      value: 'Apple', 
      disabled: false,
      checked: true,
      indeterminate: false, }
};

