import { Meta } from '@storybook/react';

import { Header as HeaderComponent } from '@/components';

const meta: Meta<typeof HeaderComponent> = {
  title: 'Components/Header',
  component: HeaderComponent,
};

export default meta;

export const Header = {
  render: () => <HeaderComponent />,
};
