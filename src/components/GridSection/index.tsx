import * as Styled from './styled';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export type GridSectionElementProps = {
  title: string;
  description: string;
};

export type GridSectionProps = {
  title: string;
  description: string;
  $background?: boolean;
  $sectionid?: string;
  component?: string;
  grid: GridSectionElementProps[];
};

export const GridSection = ({
  title,
  description,
  $background = false,
  grid,
  $sectionid = '',
}: GridSectionProps) => {
  return (
    <SectionBackground $background={$background} $sectionid={$sectionid}>
      <Styled.Container>
        <Heading as="h2" $colordark={!$background}>
          {title}
        </Heading>
        <Text>{description}</Text>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading
                as="h3"
                $uppercase={false}
                size="medium"
                $colordark={!$background}
              >
                {el.title}
              </Heading>
              <Text>{el.description}</Text>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
