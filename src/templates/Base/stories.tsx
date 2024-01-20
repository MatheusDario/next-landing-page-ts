import { Meta, StoryFn } from '@storybook/react';
import { Base, BaseProps } from '.';
import { mockBase } from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
} as Meta;

export const Template: StoryFn<BaseProps> = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
