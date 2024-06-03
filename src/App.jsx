import { Provider } from 'react-redux';
import LoginPage from './pages/LoginPage/LoginPage';
import { store } from './redux/store';
import Router from './shared/Router';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <LoginPage />
    </Provider>
  );
};

export default App;
