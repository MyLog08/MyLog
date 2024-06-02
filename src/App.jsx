import Router from './shared/Router';
import Mypage from './pages/Mypage';
import { useEffect, useState } from 'react';
import EditProfile from './pages/EditProfile';
import supabase from './supabase/supabase';

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('Users').select('*');
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        setUser(data);
      }
    };
    fetchData();
  }, []);

  const [page, setPage] = useState('mypage');

  const handleUpdateProfile = (updateUser) => {
    setUser(updateUser);
    setPage('mypage');
  };

  return (
    <>
      <Router />
      {page === 'mypage' ? (
        <Mypage user={user} onEditProfile={() => setPage('editprofile')} />
      ) : (
        <EditProfile user={user} onUpdateProfile={handleUpdateProfile} />
      )}
    </>
  );
};

export default App;
