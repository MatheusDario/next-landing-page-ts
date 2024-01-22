import * as Styled from './styled';
import { SectionBackground } from '../SectionBackground';
import { Text } from '../Text';
import { Heading } from '../Heading';

export type GridContentProps = {
  title: string;
  html: string;
  $background?: boolean;
  $sectionid?: string;
  component?: string;
};

export const GridContent = ({
  title,
  html,
  $background = false,
  $sectionid = '',
}: GridContentProps) => {
  return (
    <SectionBackground $background={$background} $sectionid={$sectionid}>
      <Styled.Container>
        <Heading as="h2" $colordark={!$background}>
          {title}
        </Heading>
        <Styled.Html>
          <Text>{html}</Text>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};
