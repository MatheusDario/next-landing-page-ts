import * as Styled from './styled';

export type SectionContainerProps = {
  children: React.ReactNode;
};

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
