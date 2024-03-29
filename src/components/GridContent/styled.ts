/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
`;

export const Html = styled.div`
    ${({ theme }) => css`
      margin: ${theme.spacing.xlarge} 0;
    `}
`;
