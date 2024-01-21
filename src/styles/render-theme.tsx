import { RenderResult, render } from '@testing-library/react';
import { MyThemeProvider } from './MyThemeProvider';

export const renderTheme = (): RenderResult => {
  return render(<MyThemeProvider />);
};
