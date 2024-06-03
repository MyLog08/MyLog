// import Router from './shared/Router';
// import Mypage from './pages/Mypage';
// import { useEffect, useState } from 'react';
// import EditProfile from './pages/EditProfile';
// import supabase from './supabase/supabase';
// import { Route, Routes } from 'react-router-dom';

// const App = () => {
//   const [user, setUser] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data, error } = await supabase
//       .from('Users').select('*');
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(data);
//         setUser(data);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleUpdateProfile = (updateUser) => {
//     setUser(updateUser);
//     setPage('mypage');
//   };

//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/profile" element={<Mypage user={user} onEditProfile={() => setPage('editprofile')} />} />
//           <Route path="/editprofile" element={<EditProfile user={user} onUpdateProfile={handleUpdateProfile} />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;

{
  /* {page === 'mypage' ? (
  <Mypage user={user} onEditProfile={() => setPage('editprofile')} />
) : (
  <EditProfile user={user} onUpdateProfile={handleUpdateProfile} />
)} */
}


import Router from './shared/Router';
import { useEffect, useState } from 'react';
import supabase from './supabase/supabase';

const App = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState('mypage'); // 페이지 상태 관리 추가

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
      .from('Users').select('*');
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        setUser(data);
      }
    };
    fetchData();
  }, []);

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
