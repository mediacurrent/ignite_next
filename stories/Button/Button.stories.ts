import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    mode: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    mode: 'secondary',
    label: 'Button',
  },
};

export const Success: Story = {
  args: {
    mode: 'success',
    label: 'Button',
  },
};

export const Danger: Story = {
  args: {
    mode: 'danger',
    label: 'Button',
  },
};

export const Warning: Story = {
  args: {
    mode: 'warning',
    label: 'Button',
  },
};

export const Info: Story = {
  args: {
    mode: 'info',
    label: 'Button',
  },
};

export const Light: Story = {
  args: {
    mode: 'light',
    label: 'Button',
  },
};

export const Dark: Story = {
  args: {
    mode: 'dark',
    label: 'Button',
  },
};

export const Link: Story = {
  args: {
    mode: 'link',
    label: 'Button',
  },
};

export const PrimaryOutline: Story = {
  args: {
    mode: 'outline-primary',
    label: 'Button',
  },
};

export const SecondaryOutline: Story = {
  args: {
    mode: 'outline-secondary',
    label: 'Button',
  },
};

export const SuccessOutline: Story = {
  args: {
    mode: 'outline-success',
    label: 'Button',
  },
};

export const DangerOutline: Story = {
  args: {
    mode: 'outline-danger',
    label: 'Button',
  },
};

export const WarningOutline: Story = {
  args: {
    mode: 'outline-warning',
    label: 'Button',
  },
};

export const InfoOutline: Story = {
  args: {
    mode: 'outline-info',
    label: 'Button',
  },
};

export const LightOutline: Story = {
  args: {
    mode: 'outline-light',
    label: 'Button',
  },
};

export const DarkOutline: Story = {
  args: {
    mode: 'outline-dark',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Button',
  },
};
