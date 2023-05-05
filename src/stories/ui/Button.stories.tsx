import { Meta, StoryObj } from '@storybook/react';
import { FiSave } from 'react-icons/fi';

import { Button } from '@/shared/ui';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <FiSave />,
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <FiSave />,
  },
};
