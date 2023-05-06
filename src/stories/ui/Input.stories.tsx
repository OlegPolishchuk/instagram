import { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/shared/ui';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Input label',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: args => <Input {...args} />,
};

export const Error: Story = {
  args: {
    errorMessage: 'Error message',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
