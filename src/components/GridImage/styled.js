/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styled';
import { Container as TextContainer } from '../Text/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    > ${TextContainer} {
      margin-bottom: ${theme.spacing.huge};
    }
  `}
`;
export const Grid = styled.div`
  ${({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing.huge};

    ${theme.breakpoints.mobile} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
      width: 100%;
      transition: all 300ms ease-in-out;

      &:hover {
        transform: scale(1.2) rotate(10deg);
      }
  `}
`;
