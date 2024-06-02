import { Provider } from 'react-redux';
import Router from './shared/Router';
import { store } from './redux/store';
import Mypage from './pages/Mypage';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <Mypage />
    </Provider>
  );
};

export default App;
