import { screen } from '@testing-library/react';
import { GoTop } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GoTop />', () => {
  it('should render a go to top button', () => {
    const { container } = renderTheme(<GoTop />);
    expect(
      screen.getByRole('link', { name: 'Ir para o inicio' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Ir para o inicio' }),
    ).toHaveAttribute('href', '#');
    expect(container).toMatchSnapshot();
  });
});
