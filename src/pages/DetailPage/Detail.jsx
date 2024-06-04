import ArticleDisplay from '../../components/DetailPage/ArticleDisplay';
import CommentInput from '../../components/DetailPage/CommentInput';
import CommentDisplay from '../../components/DetailPage/CommentDisplay';

const Detail = () => {
  return (
    <>
      <ArticleDisplay />
      <CommentInput />
      <CommentDisplay />
    </>
  );
};

export default Detail;
