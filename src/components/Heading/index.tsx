import * as Styled from './styled';

export type HeadingProps = {
  children: React.ReactNode;
  $colordark?: boolean;
  $uppercase?: boolean;
  size?: 'small' | 'medium' | 'big' | 'huge';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading = ({
  children,
  $colordark = true,
  as = 'h1',
  size = 'huge',
  $uppercase = true,
}: HeadingProps) => {
  return (
    <Styled.Title
      $colordark={$colordark}
      as={as}
      size={size}
      $uppercase={$uppercase}
    >
      {children}
    </Styled.Title>
  );
};
