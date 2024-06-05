import { useState, useEffect } from 'react';
import supabase from '../../supabase/supabase';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import LoadingBar from '../Common/LoadingBar';
import {
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

  if (!article || !userNickname) {
    // 나중에 로딩 화면 스피너 넣으면 좋을 것 같습니다!
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
      <DetailPageImg>
        {JSON.parse(article.imageUrl).map((url, index) => (
          <img key={index} src={url} alt="이미지" />
        ))}
      </DetailPageImg>

      <DetailContent>{article.content}</DetailContent>
    </DetailSection>
  );
};

export default ArticleDisplay;
