import { useState, useEffect } from 'react';
import supabase from '../../supabase/supabase';
import { useParams } from 'react-router-dom';
import ArticleDisplay from '../../components/DetailPage/ArticleDisplay';
import CommentInput from '../../components/DetailPage/CommentInput';
import CommentDisplay from '../../components/DetailPage/CommentDisplay';

const DetailPage = () => {
  const { articleId } = useParams();
  const [comments, setComments] = useState([]);

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
      <CommentInput fetchData={fetchData} />
      <CommentDisplay comments={comments} setComments={setComments} />
    </>
  );
};

export default DetailPage;
