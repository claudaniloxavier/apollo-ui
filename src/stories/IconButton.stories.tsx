import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../../lib/main';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Icon Button',
  component: IconButton,
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
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'C',
    variant: 'primary',
    shape: 'solid',
    size: 'medium',
    raised: false,
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    children: 'C',
    variant: 'secondary',
    shape: 'solid',
    size: 'medium',
    raised: false,
    disabled: false
  },
};

export const Success: Story = {
  args: {
    children: 'C',
    variant: 'success',
    shape: 'solid',
    size: 'medium',
    raised: false,
    disabled: false
  },
};

export const Error: Story = {
  args: {
    children: 'C',
    variant: 'error',
    shape: 'solid',
    size: 'medium',
    raised: false,
    disabled: false
  },
};

export const Warning: Story = {
  args: {
    children: 'C',
    variant: 'warning',
    shape: 'solid',
    size: 'medium',
    raised: false,
    disabled: false
  },
};