import { Meta, StoryFn } from '@storybook/react';
import { Text, TextProps } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
    cupiditate alias. Quas quibusdam illum fugiat veritatis, rem nostrum eius,
    doloribus commodi numquam perferendis animi, dolore harum culpa explicabo distinctio ab.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;
export const Template: StoryFn<TextProps> = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};
