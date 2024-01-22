import * as Styled from './styled';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export type GridTwoColumnsProps = {
  title: string;
  text: string;
  srcimg: string;
  $background?: boolean;
  $sectionid?: string;
  component?: string;
};

export const GridTwoColumns = ({
  title,
  text,
  srcimg,
  $background = false,
  $sectionid = '',
}: GridTwoColumnsProps) => {
  return (
    <SectionBackground $background={$background} $sectionid={$sectionid}>
      <Styled.Container $background={$background}>
        <Styled.TextContainer>
          <Heading as="h2" $colordark={!$background}>
            {title}
          </Heading>
          <Text>{text}</Text>
        </Styled.TextContainer>
        <Styled.ImgContainer>
          <Styled.Image src={srcimg} alt={title} />
        </Styled.ImgContainer>
      </Styled.Container>
    </SectionBackground>
  );
};
