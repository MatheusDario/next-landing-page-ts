import * as Styled from './styled';
import { SectionContainer } from '../SectionContainer';

export type SectionBackgroundProps = {
  children: React.ReactNode;
  $background?: boolean;
  $sectionid?: string;
};

const random = () =>
  `id=${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-');

export const SectionBackground = ({
  children,
  $background = false,
  $sectionid = '',
}: SectionBackgroundProps) => {
  const id = $sectionid ? $sectionid : random();

  return (
    <Styled.Container $background={$background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};
