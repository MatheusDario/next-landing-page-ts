import { GridTwoColumns } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
