import type { Meta, StoryObj } from '@storybook/svelte';

import MultiSelect from './MultiSelect.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
} satisfies Meta<MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    variant: 'Text',
    label: 'Please select some options',
    noSelectionsLabel:'MultiSelect',
    options: ['Apple', 'Banana', 'Cherry'],
  },
};

export const Checkboxes: Story = {
  args: {
    variant: 'Checkbox',
    label: 'Please select some options',
    noSelectionsLabel:'MultiSelect',
    options: ['Apple', 'Banana', 'Cherry'],
  },
};