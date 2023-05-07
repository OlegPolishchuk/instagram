import { Meta, StoryObj } from '@storybook/react';

import { Checkbox as CheckboxComponent } from '@/shared/ui';

const meta: Meta<typeof CheckboxComponent> = {
  title: 'UI/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  args: {
    label: 'Some label text',
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxComponent>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};
