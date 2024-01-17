import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

import mock from './mock';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByAltText(/links/i)).toHaveLength(0);
  });

  it('should render mobile nav', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.breakpoints.tests,
    });
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
