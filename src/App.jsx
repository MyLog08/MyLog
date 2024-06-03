import { Provider } from 'react-redux';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { AppContainer, PageWrapper } from './styles/GlobalStyle';
import { store } from './redux/store';
import Router from './shared/Router';

const App = () => {
  return (
    <Provider store={store}>
      <PageWrapper>
        <AppContainer>
          <Router />
          <RegisterPage />
        </AppContainer>
      </PageWrapper>
    </Provider>
  );
};

export default App;
