import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkSignIn } from '../../redux/slices/authSlice';
import supabase from '../../supabase/supabase';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { validateLength } from '../../utils/validators';
import { CommentPost, CommentPostingBox, CommentsCount, InputContainer } from '../../styles/Detail/CommentStyle';
import { StyledButton } from '../../styles/Common/ButtonStyle';

const CommentInput = ({ fetchData }) => {
  const { articleId } = useParams();
  const [commentsCount, setCommentsCount] = useState(0);
  const [content, setContent] = useState('');

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSignIn());

    const fetchData = async () => {
      try {
        // 댓글 수 가져오기
        const { data: commentsData, error: commentsError } = await supabase
          .from('Comments')
          .select('commentId')
          .eq('articleId', articleId);
        if (commentsError) {
          throw commentsError;
        }

        const commentsCount = commentsData ? commentsData.length : 0;
        setCommentsCount(commentsCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch, articleId]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // 비로그인 시 로그인 페이지로 리다이렉션
    if (!isLoggedIn) {
      alert('로그인 후 댓글을 작성할 수 있습니다.');
      navigate('/auth/login');
      return;
    }

    // 유효성 검사 : 댓글 5자 이상
    if (!validateLength(content, 5)) {
      alert('댓글을 5자 이상 입력해 주세요.');
      return;
    }

    try {
      // 로그인 시 댓글 등록
      const timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss');
      const { commentError } = await supabase.from('Comments').insert({
        commentId: crypto.randomUUID(),
        userId: user.id,
        articleId,
        content,
        createdAt: timestamp,
        updatedAt: timestamp
      });

      if (commentError) {
        throw commentError;
      } else {
        setContent('');
        setCommentsCount((prevCount) => prevCount + 1);
        fetchData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CommentPostingBox>
      <CommentsCount>{commentsCount}개의 댓글</CommentsCount>
      <InputContainer>
        <CommentPost
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="Post your reply"
        ></CommentPost>
        <StyledButton onClick={handleOnSubmit}>Post</StyledButton>
      </InputContainer>
    </CommentPostingBox>
  );
};

export default CommentInput;
