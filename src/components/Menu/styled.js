/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styled';
import { Title as Heading } from '../Heading/styled';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, $visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    transition: all 300ms ease-in-out;
    border-bottom: ${theme.colors.lightgray};
    background: ${theme.colors.white};

    border-bottom: 1px solid lightgray;

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    ${theme.breakpoints.mobile} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;

      ${$visible && menuVisible(theme)}

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
    }

    & ${Heading} {
      padding-bottom: ${theme.spacing.medium};
      display: flex;
      justify-content: center;
    }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${theme.breakpoints.mobile} {
      display: block;
      text-align: center;
      padding-bottom: ${theme.spacing.medium};
  `}
`;

export const Button = styled.button`
  ${({ theme, $visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    border-radius: .5rem;
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    opacity: .7;
    display: none;
    pointer-events: ${$visible ? 'none' : 'all'};

    ${theme.breakpoints.mobile} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > svg {
      width: 3rem;
      height: 3rem;
    }
  `}
`;
