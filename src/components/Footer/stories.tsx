import { Meta, StoryFn } from '@storybook/react';
import { Footer, FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p>
    Desenvolvido por
    <a
      rel="nofollow"
      target="_blank"
      href="https://www.linkedin.com/in/matheus-dario"
      >Matheus Dario</a
    >
  </p>`,
  },
} as Meta<typeof Footer>;

export const Template: StoryFn<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
