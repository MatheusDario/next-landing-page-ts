import P from 'prop-types';
import * as Styled from './styled';
import { SectionContainer } from '../SectionContainer';

const random = () =>
  `id=${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-');

export const SectionBackground = ({
  children,
  $background = false,
  $sectionid = '',
}) => {
  const id = $sectionid ? $sectionid : random();

  return (
    <Styled.Container $background={$background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  $background: P.bool,
  $sectionid: P.string,
};
