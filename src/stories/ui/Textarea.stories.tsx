import { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '@/shared/ui';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Placeholder text',
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: args => <Textarea {...args} />,
};

export const WithError: Story = {
  args: {
    errorMessage: 'Some error message',
  },
};
