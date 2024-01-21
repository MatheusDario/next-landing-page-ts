import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.title};
    margin: ${({ theme }) => theme.spacing.large} 0;
  }
  p {
    margin: ${({ theme }) => theme.spacing.medium} 0;
  }
  ul, ol {
    margin: ${({ theme }) => theme.spacing.medium};
    padding: ${({ theme }) => theme.spacing.medium};
  }
  a {
    color: ${({ theme }) => theme.colors.lightblue};
  }
  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
