/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.a`
${({ theme }) => css`
  display: block;
  position: relative;
  text-decoration: none;
  transition: all 300ms ease-in-out;
  font-size: ${theme.font.sizes.small};
  padding: ${theme.spacing.small};
  color: ${theme.colors.blue};

  &::after {
    content: '';
    position: absolute;
    bottom: 0.8rem;
    left: 50%;
    width: 0%;
    height: 0.2rem;
    background-color: ${theme.colors.red};
    transition: all 300ms ease-in-out;
  }

  &:hover::after {
    left: 25%;
    width: 50%;
  }

  &:hover {
    color: ${theme.colors.lightblue};
  }
`}
`;
