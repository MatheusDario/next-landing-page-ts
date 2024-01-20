import * as Styled from './styled';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { MenuLinkProps } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';

export type BaseProps = {
  children: React.ReactNode;
  footerHtml: string;
  links: MenuLinkProps[];
  logoData: LogoLinkProps;
};

export const Base = ({ children, logoData, footerHtml, links }: BaseProps) => {
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
