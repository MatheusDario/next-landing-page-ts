import P from 'prop-types';
import * as Styled from './styled';
import { Text } from '../Text';

export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <Text>{footerHtml}</Text>
    </Styled.Container>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
