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

  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContent, setEditedContent] = useState('');

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

  // 댓글 수정 모드 토글
  const toggleEditMode = (commentId, initialContent) => {
    setEditingCommentId(commentId);
    setEditedContent(initialContent);
  };

  // 댓글 수정하기
  const handleUpdateComment = async (targetId) => {
    // 유효성 검사 : 댓글 5자 이상
    if (editedContent.trim().length < 5) {
      alert('댓글을 5자 이상 입력해 주세요.');
      return;
    }

    try {
      const { commentUpdateError } = await supabase
        .from('Comments')
        .update({ content: editedContent })
        .eq('commentId', targetId);
      if (commentUpdateError) {
        throw commentUpdateError;
      }

      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.commentId === targetId ? { ...comment, content: editedContent } : comment
        )
      );

      setEditingCommentId(null);
    } catch (error) {
      console.error(error);
    }
  };

  // 댓글 삭제하기
  const handleDeleteComment = async (targetId) => {
    if (!confirm('댓글을 삭제하시겠습니까?')) {
      return;
    } else {
      try {
        const { commentDeleteError } = await supabase.from('Comments').delete().eq('commentId', targetId);

        if (commentDeleteError) {
          throw commentDeleteError;
        } else {
          setComments(comments.filter((comment) => comment.commentId !== targetId));
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

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
              <li key={comment.commentId}>
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
                  {user && comment.userId === user.id ? (
                    <div>
                      {editingCommentId === comment.commentId ? (
                        <button onClick={() => handleUpdateComment(comment.commentId)}>저장</button>
                      ) : (
                        <button onClick={() => toggleEditMode(comment.commentId, comment.content)}>수정</button>
                      )}
                      <button onClick={() => handleDeleteComment(comment.commentId)}>삭제</button>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                {/* 스타일 작업 시 아래 스타일 적용 부탁드립니다! */}
                {editingCommentId === comment.commentId ? (
                  <input type="text" value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
                ) : (
                  <div style={{ whiteSpace: 'pre-wrap' }}>{comment.content}</div>
                )}
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
};

export default CommentDisplay;