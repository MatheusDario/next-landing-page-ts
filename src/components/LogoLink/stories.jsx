import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo',
    link: 'https://google.com',
    srcimg: 'assets/images/logo.svg',
  },
};
export const LogoImage = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const LogoText = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

LogoText.args = {
  srcimg: '',
};
