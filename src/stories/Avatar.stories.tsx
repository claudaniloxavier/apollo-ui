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

export const TwoLetters: Story = {
  args: {
    name: 'Barry Allen',
    size: 'md',
    doubleInitials: true
  },
};

export const WithImage: Story = {
  args: {
    name: 'Miles Morales',
    image: 'https://cdn.vrcmods.com/uploads/items/item/4284/imgs/67099763a2b04c39995c281559b817ab.jpg',
    size: 'md'
  },
};

export const Square: Story = {
  args: {
    name: 'Barry Allen',
    size: 'md',
    type: 'square'
  },
};

export const SquareWithTwoLetters: Story = {
  args: {
    name: 'Barry Allen',
    size: 'md',
    doubleInitials: true,
    type: 'square'
  },
};

export const SquareWithImage: Story = {
  args: {
    name: 'Barry Allen',
    size: 'md',
    type: 'square',
    image: 'https://cdn.vrcmods.com/uploads/items/item/4284/imgs/67099763a2b04c39995c281559b817ab.jpg',
  },
};