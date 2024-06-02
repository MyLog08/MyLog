import Router from './shared/Router';
import GlobalStyle, { AppContainer } from './styles/GlobalStyle';

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router />
    </AppContainer>
  );
};

export default App;
