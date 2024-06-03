import { Provider } from 'react-redux';

import { store } from './redux/store';
import Router from './shared/Router';
import { AppContainer, PageWrapper } from './styles/GlobalStyle';

const App = () => {
  return (
    <Provider store={store}>
      <PageWrapper>
        <AppContainer>
          <Router />
        </AppContainer>
      </PageWrapper>
    </Provider>
  );
};

export default App;
