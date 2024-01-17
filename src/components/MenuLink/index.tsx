import * as Styled from './styled';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newtab?: boolean;
};

export const MenuLink = ({ children, link, newtab = false }: MenuLinkProps) => {
  const target = newtab ? '_blank' : '_self';
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
