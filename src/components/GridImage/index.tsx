import * as Styled from './styled';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export type GridImageElementProps = {
  altText: string;
  srcImg: [];
};

export type GridImageProps = {
  title: string;
  description: string;
  $background?: boolean;
  $sectionid?: string;
  component?: string;
  grid?: GridImageElementProps[];
};

export const GridImage = ({
  title,
  description,
  grid,
  $background = false,
  $sectionid = '',
}: GridImageProps) => {
  return (
    <SectionBackground $background={$background} $sectionid={$sectionid}>
      <Styled.Container>
        <Heading as="h2" $colordark={!$background}>
          {title}
        </Heading>
        <Text>{description}</Text>
        <Styled.Grid>
          {grid[0].srcImg.map((el) => (
            <Styled.GridElement key={Math.random()}>
              <Styled.Image src={el} alt={title} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
