import P from 'prop-types';
import * as Styled from './styled';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export const Base = ({ children, logoData, footerHtml, links }) => {
  return (
    <>
      <Menu logoData={logoData} links={links} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  footerHtml: P.string.isRequired,
  ...Menu.propTypes,
};
