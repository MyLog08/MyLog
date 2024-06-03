import { useState, useEffect } from 'react';
import supabase from '../supabase/supabase';
import dayjs from 'dayjs';

const CommentInput = () => {
  // 테스트용 게시글 아이디
  const articleId = 'f1a37c3a-0fdf-46f0-92e1-08739684bf88';

  const [commentsCount, setCommentsCount] = useState(0);
  const [content, setContent] = useState('');

  useEffect(() => {
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
  }, [articleId]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      // 로그인/비로그인 체크

      // 비로그인 시 로그인 페이지로 리다이렉션

      // 유효성 검사 : 댓글 5자 이상
      if (content.trim() === '' || content.length < 5) {
        alert('댓글을 5자 이상 입력해 주세요.');
        return;
      }

      // 로그인 시 댓글 등록
      // commentId, userId, articleId, content, createdAt, updatedAt
      const { commentData, commentError } = await supabase.from('Comments').insert({
        commentId: crypto.randomUUID(),
        // 테스트용
        userId: '00113606-fac2-45ca-b8b6-ab2ae57c263d',
        articleId,
        content,
        createdAt: dayjs().format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: dayjs().format('YYYY-MM-DD hh:mm:ss')
      });

      if (commentError) {
        throw commentError;
      } else {
        setContent('');
        setCommentsCount((prevCount) => prevCount + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div>{commentsCount}개의 댓글</div>
      <div>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="댓글을 작성하세요."
        ></input>
      </div>
      <div>
        <button onClick={handleOnSubmit}>등록</button>
      </div>
    </section>
  );
};

export default CommentInput;
