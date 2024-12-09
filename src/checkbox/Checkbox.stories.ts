import type { Meta, StoryObj } from "@storybook/svelte";

import Checkbox from "./Checkbox.svelte";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    indeterminate: { control: "boolean" },
  },
} satisfies Meta<Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    disabled: false,
    checked: true,
    indeterminate: false,
  },
};
