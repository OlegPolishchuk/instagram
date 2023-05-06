import { Meta, StoryObj } from '@storybook/react';

import { LoginForm as Form } from '@/components';

const meta: Meta<typeof Form> = {
  title: 'Components/LoginForm',
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

export const LoginForm: Story = {
  render: () => <Form />,
};
