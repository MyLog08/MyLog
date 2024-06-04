import { Provider } from 'react-redux';
import { store } from './redux/store';
import Router from './shared/Router';
import { AppContainer } from './styles/GlobalStyle/AppStyle';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Router />
      </AppContainer>
    </Provider>
  );
};

export default App;
