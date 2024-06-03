import { useState, useEffect } from 'react';
import supabase from '../supabase/supabase';
import dayjs from 'dayjs';

const CommentDisplay = () => {
  // 테스트용 게시글 아이디
  const articleId = 'f1a37c3a-0fdf-46f0-92e1-08739684bf88';

  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
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
  }, [articleId]);

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
                <img src={userInfo.imageUrl} alt="프로필 이미지" />
                <div>
                  <span>{userInfo.nickname}</span>
                  <span>
                    {comment.createdAt === comment.updatedAt
                      ? dayjs(comment.createdAt).format('YYYY년 MM월 DD일')
                      : dayjs(comment.updatedAt).format('YYYY년 MM월 DD일')}
                  </span>
                </div>
                <div>{comment.content}</div>
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
};

export default CommentDisplay;
