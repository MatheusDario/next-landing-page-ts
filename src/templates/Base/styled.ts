/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
  padding-top: 5.4rem;

  ${theme.breakpoints.mobile} {
    padding-top: 0;
  }
`}
`;
