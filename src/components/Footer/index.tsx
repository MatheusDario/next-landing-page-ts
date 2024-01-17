import * as Styled from './styled';
import { Text } from '../Text';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <Text>{footerHtml}</Text>
    </Styled.Container>
  );
};
