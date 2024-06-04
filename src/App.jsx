import Router from './shared/Router';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppContainer } from './styles/GlobalStyle/AppStyle';

const App = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState('mypage'); // 페이지 상태 관리 추가
  
  const handleUpdateProfile = (updateUser) => {
    setUser(updateUser);
    setPage('mypage');
  };

  const handleEditProfile = () => {
    setPage('editprofile');
  };

  return (
    

    <Provider store={store}>
      <AppContainer>
        <Router />
        <Router user={user} onEditProfile={handleEditProfile} onUpdateProfile={handleUpdateProfile} />
      </AppContainer>
    </Provider>
  );
};

export default App;