import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../lib/main';

const meta = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' }
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

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