import { Meta, StoryFn } from '@storybook/react';
import { GridTwoColumns, GridTwoColumnsProps } from '.';
import mock from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;
export const Template: StoryFn<GridTwoColumnsProps> = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
