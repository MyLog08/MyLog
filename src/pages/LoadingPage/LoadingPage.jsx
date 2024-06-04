import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { handleUserRegisterInsert } from '../../api/authApi';
import { checkSignIn } from '../../redux/slices/authSlice';
import { validateCheckDuplicate } from '../../utils/validators';

function LoadingPage() {
  const params = useParams();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const navigate = useNavigate();

  console.log(params);
  console.log(user);

  useEffect(() => {
    dispatch(checkSignIn());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const dataInsert = async () => {
        if (await validateCheckDuplicate('email', user.email)) {
          return;
        }

        await handleUserRegisterInsert({
          userId: user.id,
          name: user.user_metadata.name,
          email: user.email,
          nickname: user.user_metadata.full_name,
          imageUrl: user.user_metadata.avatar_url,
          birth: user.user_metadata.birth,
          social: params.provider,
          createdAt: dayjs(user.created_at).format('YYYY-MM-DD hh:mm:ss'),
          updatedAt: dayjs(user.updated_at).format('YYYY-MM-DD hh:mm:ss')
        });
      };
      dataInsert();
      navigate('/');
    }
  }, [user, params.provider]);

  return <div>Loading......</div>;
}

export default LoadingPage;
