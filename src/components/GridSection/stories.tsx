import { Meta, StoryFn } from '@storybook/react';
import { GridSection, GridSectionProps } from '.';

import mock from './mock';

export default {
  title: 'GridSection',
  component: GridSection,
  args: mock,
} as Meta;
export const Template: StoryFn<GridSectionProps> = (args) => {
  return (
    <div>
      <GridSection {...args} />
    </div>
  );
};
