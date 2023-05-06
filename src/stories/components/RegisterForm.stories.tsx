import { Meta, StoryObj } from '@storybook/react';

import { RegisterForm as Form } from '@/components';

const meta: Meta<typeof Form> = {
  title: 'Components/RegisterForm',
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

export const RegisterForm: Story = {
  render: () => <Form />,
};
