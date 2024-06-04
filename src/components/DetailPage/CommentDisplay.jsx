import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkSignIn } from '../../redux/slices/authSlice';
import supabase from '../../supabase/supabase';
import dayjs from 'dayjs';

const CommentDisplay = () => {
  // 테스트용 게시글 아이디
  const articleId = 'f1a37c3a-0fdf-46f0-92e1-08739684bf88';

  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSignIn());

    const fetchData = async () => {
      try {
        // 댓글 정보를 댓글 업데이트 날짜 최신순으로 가져오기
        const { data: commentsData, error: commentsError } = await supabase
          .from('Comments')
          .select('*')
          .eq('articleId', articleId)
          .order('updatedAt', { ascending: false });
        if (commentsError) {
          throw commentsError;
        }
        setComments(commentsData);

        // 댓글 작성자 아이디, 닉네임, 프로필 사진 가져오기
        if (commentsData.length > 0) {
          const userIds = [...new Set(commentsData.map((comment) => comment.userId))];
          const { data: userData, error: userError } = await supabase
            .from('Users')
            .select('userId, nickname, imageUrl')
            .in('userId', userIds);
          if (userError) {
            throw userError;
          }

          const userMap = userData.reduce((acc, user) => {
            acc[user.userId] = user;
            return acc;
          }, {});

          setUsers(userMap);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch, articleId]);

  // 댓글 수정
  const handleUpdateComment = async (e) => {};

  // 댓글 삭제
  const handleDeleteComment = async (e) => {};

  return (
    <section>
      <ul>
        {comments.length === 0 ? (
          <div>댓글이 존재하지 않습니다.</div>
        ) : (
          comments.map((comment) => {
            // imageUrl가 null인 경우 기본 프로필 이미지 나오도록 나중에 교체할 것
            const userInfo = users[comment.userId] || { nickname: 'Unknown', imageUrl: '#' };
            return (
              <li key={comment.id}>
                <div>
                  <div>
                    <img src={userInfo.imageUrl} alt="프로필 이미지" />
                  </div>
                  <div>
                    <span>{userInfo.nickname}</span>
                    <span>
                      {comment.createdAt === comment.updatedAt
                        ? dayjs(comment.createdAt).format('YYYY년 MM월 DD일')
                        : dayjs(comment.updatedAt).format('YYYY년 MM월 DD일')}
                    </span>
                  </div>
                  {/* 로그인한 유저의 아이디와 댓글 작성자 아이디가 일치할 경우 수정 삭제 버튼 보여주기 */}
                  {comment.userId === user.id ? (
                    <div>
                      <button onClick={handleUpdateComment}>수정</button>
                      <button onClick={handleDeleteComment}>삭제</button>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                {/* 스타일 작업 시 아래 스타일 적용 부탁드립니다! */}
                <div style={{ whiteSpace: 'pre-wrap' }}>{comment.content}</div>
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
};

export default CommentDisplay;
