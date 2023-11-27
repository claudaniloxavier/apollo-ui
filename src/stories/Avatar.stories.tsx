import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../lib/main';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' }
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    name: 'Barry Allen',
    size: 'md'
  },
};

export const WithImage: Story = {
  args: {
    name: 'Miles Morales',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHgsVzd219uJAtOb2q0zmXGA-aywczrDp3w&usqp=CAU',
    size: 'md'
  },
};