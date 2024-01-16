/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../Text/styled';

export const Container = styled.footer`
  ${({ theme }) => css`
      max-width: 120rem;
      margin: 0 auto;
      text-align: center;
      border-top: 1px solid lightgray;

    & ${TextComponent} {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
