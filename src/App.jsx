import Router from './shared/Router';
import { AppContainer, PageWrapper } from './styles/GlobalStyle';

const App = () => {
  return (
    <PageWrapper>
      <AppContainer>
        <Router />
      </AppContainer>
    </PageWrapper>
  );
};

export default App;
