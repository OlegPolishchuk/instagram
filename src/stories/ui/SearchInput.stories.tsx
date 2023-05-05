import { Meta, StoryObj } from '@storybook/react';

import { SearchInput as Input } from '@/shared/ui';

const meta: Meta<typeof Input> = {
  title: 'UI/SearchInput',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const SearchInput: Story = {
  render: args => <Input {...args} />,
};

export const SearchInputFullWidth: Story = {
  args: {
    fullWidth: true,
  },
};
