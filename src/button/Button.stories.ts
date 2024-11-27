import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'raised'],
    },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Raised: Story = {
  args: {
    variant: 'raised',
    label: 'Button',
    icon: 'add',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined',
  },
};

export const Default: Story = {
  args: {
    label: 'Default',
  },
};

export const Squarcle: Story = {
  args: {
    variant: 'raised',
    label: 'Squarcle',
    square: true,
  },
};

export const SquarcleOutlined: Story = {
  args: {
    variant: 'outlined',
    label: 'SquarcleOutlined',
    square: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'raised',
    label: 'Disabled',
    disabled: true,
  },
};
