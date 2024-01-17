import { Meta, StoryFn } from '@storybook/react';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section-Container</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quisquam
          modi minus? Architecto unde sequi mollitia quibusdam vero eos
          provident nisi minima aut optio magni perspiciatis, sit voluptates,
          doloremque numquam?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;
export const Template: StoryFn<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
