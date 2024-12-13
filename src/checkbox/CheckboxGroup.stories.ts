import type { Meta, StoryObj } from "@storybook/svelte";

import CheckboxGroup from "./CheckboxGroup.svelte";

const meta = {
  title: "CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
} satisfies Meta<CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;
  
  export const Group: Story = {
    args: {
      options: [{ value: 'Apple', name: 'Apple', disabled: false, checked: true },
          { value: 'Banana', name: 'Banana', disabled: false },
          { value: 'Cherry', name: 'Cherry', disabled: false },
          { value: 'Rasberry', name: 'Rasberry', disabled: true },]
    },
  };