import type { Meta, StoryObj } from '@storybook/svelte';

import Select from './Select.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
   argTypes: {
    
   },
} satisfies Meta<Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Select an option',
    options: ['Option 1', 'Option 2'],
    height: 200,
  }
};