import * as Styled from './styled';
import { Heading } from '../Heading';

export type LogoLinkProps = {
  text: string;
  link: string;
  srcimg?: string;
  newtab?: boolean;
};

export const LogoLink = ({
  text,
  link,
  srcimg = '',
  newtab = false,
}: LogoLinkProps) => {
  const target = newtab ? '_blank' : '_self';

  return (
    <Heading size="small">
      <Styled.Container href={link} target={target}>
        {!!srcimg && <img src={srcimg} alt={text} />}
        {!srcimg && text}
      </Styled.Container>
    </Heading>
  );
};
