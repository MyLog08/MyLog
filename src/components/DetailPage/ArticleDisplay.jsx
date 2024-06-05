import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import supabase from '../../supabase/supabase';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import LoadingBar from '../Common/LoadingBar';
import {
  DetailButtons,
  DetailContent,
  DetailPageDate,
  DetailPageImg,
  DetailPageInfo,
  DetailPageNickname,
  DetailPageTitle,
  DetailSection
} from '../../styles/Detail/DetailStyle';

const ArticleDisplay = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [userNickname, setUserNickname] = useState(null);

  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // 게시글 정보 가져오기
      const { data: articleData, error: articleError } = await supabase
        .from('Articles')
        .select('*')
        .eq('articleId', articleId)
        .single();
      if (articleError) {
        console.log(articleError);
        return;
      }
      const fetchedArticle = articleData;

      // 작성자 닉네임 가져오기
      const { data: userNicknameData, error: userNicknameError } = await supabase
        .from('Users')
        .select('nickname')
        .eq('userId', fetchedArticle.userId)
        .single();
      if (userNicknameError) {
        console.log(userNicknameError);
        return;
      }
      const fetchedNickname = userNicknameData;

      setArticle(fetchedArticle);
      setUserNickname(fetchedNickname);
    };

    fetchData();
  }, [articleId]);

  // 게시글 수정하기
  const handleUpdateArticle = async (articleId) => {};

  // 게시글 삭제하기
  const handleDeleteArticle = async () => {
    if (!confirm('게시글을 삭제하시겠습니까?')) {
      return;
    } else {
      // 스토리지에 저장된 이미지 삭제하기 나중에 구현할 것

      try {
        const { articleDeleteError } = await supabase.from('Articles').delete().eq('articleId', articleId);

        if (articleDeleteError) {
          throw articleDeleteError;
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (!article || !userNickname) {
    return <LoadingBar />;
  }

  return (
    <DetailSection>
      <DetailPageTitle>{article.title}</DetailPageTitle>
      <DetailPageInfo>
        <DetailPageNickname>{userNickname.nickname}</DetailPageNickname>
        <DetailPageDate>
          {article.createdAt === article.updatedAt
            ? dayjs(article.createdAt).format('YYYY년 MM월 DD일')
            : dayjs(article.updatedAt).format('YYYY년 MM월 DD일')}
        </DetailPageDate>
      </DetailPageInfo>
      <DetailButtons>
        {user && article.userId === user.id ? (
          <>
            <button onClick={() => handleUpdateArticle(articleId)}>수정</button>
            <button onClick={() => handleDeleteArticle(articleId)}>삭제</button>
          </>
        ) : (
          ''
        )}
      </DetailButtons>
      <DetailPageImg>
        <img src={article.imageUrl} alt="이미지" />
      </DetailPageImg>
      <DetailContent>{article.content}</DetailContent>
    </DetailSection>
  );
};

export default ArticleDisplay;
