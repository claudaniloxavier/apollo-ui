import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '../../lib/main';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'TextField',
  component: TextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    height: 'medium',
    placeholder: 'placeholder',
    label: 'Textfield example',
    hintMessage: 'A hint message here',
    iconPosition: 'left'
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    height: 'medium',
    placeholder: 'placeholder',
    label: 'Textfield example'
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    height: 'medium',
    label: 'Textfield error example',
    hintMessage: 'Error hint message'
  },
};