import P from 'prop-types';
import * as Styled from './styled';

export const MenuLink = ({ children, link, newtab = false }) => {
  const target = newtab ? '_blank' : '_self';
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newtab: P.bool,
};
