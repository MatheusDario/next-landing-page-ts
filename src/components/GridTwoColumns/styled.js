/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Title } from '../Heading/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    text-align: justify;
    gap: ${theme.spacing.large};

    ${Title} {
      margin-bottom: ${theme.spacing.large};
    }

    ${theme.breakpoints.mobile} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
  ${theme.breakpoints.mobile} {
      margin-bottom: ${theme.spacing.large};
    }
  `}
`;

export const ImgContainer = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
  `}
`;
