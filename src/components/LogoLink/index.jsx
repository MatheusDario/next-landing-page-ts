/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styled';
import { Heading } from '../Heading';

export const LogoLink = ({ text, link, srcimg = '' }) => {
  return (
    <Heading size="small">
      <Styled.Container href={link}>
        {!!srcimg && <img src={srcimg} alt={text} />}
        {!srcimg && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  link: P.string.isRequired,
  srcimg: P.string,
};
