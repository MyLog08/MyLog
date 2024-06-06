import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleDisplay from '../../components/DetailPage/ArticleDisplay';
import CommentDisplay from '../../components/DetailPage/CommentDisplay';
import CommentInput from '../../components/DetailPage/CommentInput';
import supabase from '../../supabase/supabase';

const DetailPage = () => {
  const { articleId } = useParams();
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);

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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [articleId]);

  return (
    <>
      <ArticleDisplay />
      <CommentInput fetchData={fetchData} commentsCount={commentsCount} setCommentsCount={setCommentsCount} />
      <CommentDisplay
        comments={comments}
        setComments={setComments}
        commentsCount={commentsCount}
        setCommentsCount={setCommentsCount}
      />
    </>
  );
};

export default DetailPage;
