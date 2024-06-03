// import { BrowserRouter, Routes } from 'react-router-dom';

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes></Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditProfile from '../pages/EditProfile';
import Mypage from '../pages/Mypage'

const Router = ({user, onEditProfile, onUpdateProfile}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Mypage user={user} onEditProfile={onEditProfile} />} />
        <Route path="/editprofile" element={<EditProfile user={user} onUpdateProfile={onUpdateProfile} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
