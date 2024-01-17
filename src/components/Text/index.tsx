import * as Styled from './styled';

export type TextProps = {
  children: string;
};

export const Text = ({ children }: TextProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};
