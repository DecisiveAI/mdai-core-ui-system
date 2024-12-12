import type { Meta, StoryObj } from '@storybook/svelte';
import { withActions } from '@storybook/addon-actions/decorator';
import Button from './Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['Text', 'Outlined', 'Filled'],
    },
  },
  decorators: [withActions],
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Raised: Story = {
  args: {
    variant: 'Filled',
    label: 'Button',
    icon: 'add',
    handleClick: () => console.log('clicked'),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'Outlined',
    label: 'Outlined',
  },
};

export const Text: Story = {
  args: {
    label: 'Text',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'Filled',
    label: 'Disabled',
    disabled: true,
  },
};
