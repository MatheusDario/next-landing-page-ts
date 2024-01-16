/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.blue,
      'font-size': theme.font.sizes.huge,
      'text-transform': 'uppercase',
    });
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render white color', () => {
    renderTheme(<Heading $colordark={false}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render small heading size', () => {
    renderTheme(<Heading size="small">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.small,
    });
  });

  it('should render medium heading size', () => {
    renderTheme(<Heading size="medium">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should render big heading size', () => {
    renderTheme(<Heading size="big">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
  });

  it('should render huge heading size', () => {
    renderTheme(<Heading size="huge">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.huge,
    });
  });

  it('should correct font-size when using mobile', () => {
    renderTheme(
      <Heading as="h2" size="huge">
        Texto
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.xlarge,
      {
        media: theme.breakpoints.tests,
      },
    );
  });

  it('should render uppercase letters', () => {
    renderTheme(<Heading $uppercase>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render lowercase letters', () => {
    renderTheme(<Heading $uppercase={false}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'none',
    });
  });

  it('should render correct elemente', () => {
    const { container } = renderTheme(<Heading as="h4">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    const h6 = container.querySelector('h4');

    expect(h6.tagName.toLowerCase()).toBe('h4');
  });
});
