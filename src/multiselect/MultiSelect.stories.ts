import type { Meta, StoryObj } from '@storybook/svelte';

import MultiSelect from './MultiSelect.svelte';
import { fn } from '@storybook/test';
import { userEvent, within } from '@storybook/test';
import { withActions } from '@storybook/addon-actions/decorator';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
   argTypes: {
    toggleMenu: fn(),
   },
   parameters: {
    actions: {
      handles: ['click'],
      argTypesRegex: '^on.*',
    },
  },
  decorators: [withActions],
} satisfies Meta<MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Please select some options',
    noSelectionsLabel:'MultiSelect',
    options: ['Apple', 'Banana', 'Cherry'],
    selections: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);}  
};