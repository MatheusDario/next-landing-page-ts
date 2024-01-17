import * as Styled from './styled';
import { SectionContainer } from '../SectionContainer';
import { LogoLink, LogoLinkProps } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { useState } from 'react';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { MenuLinkProps } from '../MenuLink';

export type MenuProps = {
  links?: MenuLinkProps[];
  logoData: LogoLinkProps;
};

export const Menu = ({ links = [], logoData }: MenuProps) => {
  const [$visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button
        aria-label="Open/Close menu"
        $visible={$visible}
        onClick={() => setVisible(true)}
      >
        {$visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container $visible={$visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};
