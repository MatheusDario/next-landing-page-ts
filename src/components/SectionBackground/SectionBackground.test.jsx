import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionBackground />', () => {
  it('should render with barkground dark', () => {
    const { container } = renderTheme(
      <SectionBackground $background={true}>Children</SectionBackground>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with barkground light', () => {
    const { container } = renderTheme(
      <SectionBackground>Children</SectionBackground>,
    );
    expect(container).toMatchSnapshot();
  });
});
