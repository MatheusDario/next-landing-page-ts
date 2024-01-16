/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.nav`
${({ theme }) => css`
  display: flex;
  flex-flow: row wrap;

  ${theme.breakpoints.mobile} {
    flex-flow: column wrap;
    align-content: center;
  }
`}
`;
