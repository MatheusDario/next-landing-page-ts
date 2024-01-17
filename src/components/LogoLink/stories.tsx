import { Meta, StoryFn } from '@storybook/react';
import { LogoLink, LogoLinkProps } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo',
    link: 'https://google.com',
    srcimg: 'assets/images/logo.svg',
  },
} as Meta;

export const LogoImage: StoryFn<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const LogoText: StoryFn<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

LogoText.args = {
  srcimg: '',
};
