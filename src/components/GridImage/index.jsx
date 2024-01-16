/* eslint-disable react/prop-types */
//import P from 'prop-types';
import * as Styled from './styled';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridImage = ({
  title,
  description,
  grid,
  $background = false,
  $sectionid = '',
}) => {
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

/*
  GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  $background: P.bool,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ),
};
*/
