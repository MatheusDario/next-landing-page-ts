/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styled';
import { Container as TextContainer } from '../Text/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextContainer} {
      margin-bottom: ${theme.spacing.huge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing.large};
    overflow: hidden;
    width: 100%;

   ${theme.breakpoints.mobile} {
      grid-template-columns: 1fr;
    }

    ${TextContainer} {
        text-align: center;
      }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      left: 5rem;
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-style: italic;
      font-size: 7rem;
      top: -3rem;
      left: -5rem;
      transform: rotate(5deg);
    }
  `}
`;
