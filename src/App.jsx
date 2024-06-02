import { Provider } from 'react-redux';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { store } from './redux/store';
import Router from './shared/Router';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <RegisterPage />
    </Provider>
  );
};

export default App;
