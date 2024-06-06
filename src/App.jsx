import Router from './shared/Router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppContainer } from './styles/GlobalStyle/AppStyle';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle/GlobalStyle';
import { theme } from './styles/GlobalStyle/Theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer>
          <Router />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
