import { GridSection } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridSection />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridSection $background {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(
      <GridSection $background={false} {...mock} />,
    );
    expect(container).toMatchSnapshot();
  });
});
