import type { Meta, StoryObj } from '@storybook/svelte';
import Card from './Card.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
        backgroundColor: { control: 'color' },
        buttonVariant: {
          control: { type: 'select' },
          options: ['default', 'outlined', 'raised'],
        },
  },
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Card Title",
    subtitle: "This is a subtitle",
    content: "This is the content of the card. It can hold text, images, or other components.",
    buttonLabel: "Card Button",
    backgroundColor: "transparent"
  },
};