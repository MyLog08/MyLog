import Router from './shared/Router';
import { useEffect, useState } from 'react';
import supabase from './supabase/supabase';

const App = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState('mypage'); // 페이지 상태 관리 추가

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data, error } = await supabase
  //     .from('Users').select('*');
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log(data);
  //       setUser(data);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleUpdateProfile = (updateUser) => {
    setUser(updateUser);
    setPage('mypage');
  };

  const handleEditProfile = () => {
    setPage('editprofile');
  };

  return (
    <>
      <Router user={user} onEditProfile={handleEditProfile} onUpdateProfile={handleUpdateProfile} />
    </>
  );
};

export default App;