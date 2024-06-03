import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
`;
export default GlobalStyle;

/* src/App.jsx style components */

export const PageWrapper = styled.div`
  background-color: #fafafa;
`;

export const AppContainer = styled.div`
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
`;
