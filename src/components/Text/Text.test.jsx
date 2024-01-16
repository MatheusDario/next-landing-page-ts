import { screen } from '@testing-library/react';
import { Text } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Text />', () => {
  it('should render a text', () => {
    renderTheme(<Text>Children</Text>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(<Text>Children</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
