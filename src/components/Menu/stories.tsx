import { Meta, StoryFn } from '@storybook/react';
import { Menu, MenuProps } from '.';
import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#home',
      srcImg: '',
    },
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;
export const Template: StoryFn<MenuProps> = (args) => {
  return (
    <div style={{ height: '300vh', background: 'gray' }}>
      <Menu {...args} />
    </div>
  );
};
