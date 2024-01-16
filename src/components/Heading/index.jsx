import P from 'prop-types';
import * as Styled from './styled';

export const Heading = ({
  children,
  $colordark = true,
  as = 'h1',
  size = 'huge',
  $uppercase = true,
}) => {
  return (
    <Styled.Title
      $colordark={$colordark}
      as={as}
      size={size}
      $uppercase={$uppercase}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  $colordark: P.bool,
  $uppercase: P.bool,
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};
