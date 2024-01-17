import * as Styled from './styled';
import { Heading } from '../Heading';

export type LogoLinkProps = {
  text: string;
  link: string;
  srcimg?: string;
};

export const LogoLink = ({ text, link, srcimg = '' }: LogoLinkProps) => {
  return (
    <Heading size="small">
      <Styled.Container href={link}>
        {!!srcimg && <img src={srcimg} alt={text} />}
        {!srcimg && text}
      </Styled.Container>
    </Heading>
  );
};
