import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render logo text', () => {
    renderTheme(<LogoLink text="Logo" link="#home" />);
    screen.getByRole('heading', { name: 'Logo' });
    expect(screen.getByRole('link', { name: 'Logo' })).toHaveAttribute(
      'href',
      '#home',
    );
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink text="Logo" link="#home" srcimg="logo.jpg" />);
    expect(screen.getByRole('img', { name: 'Logo' })).toHaveAttribute(
      'src',
      'logo.jpg',
    );
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(
      <LogoLink text="Logo" link="#home" srcimg="logo.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
