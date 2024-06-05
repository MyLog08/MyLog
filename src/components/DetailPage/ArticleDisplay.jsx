import { useState, useEffect } from 'react';
import supabase from '../../supabase/supabase';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const ArticleDisplay = () => {
  // 테스트용 게시글 아이디

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
    return <div>로딩 중...</div>;
  }

  return (
    <section>
      <h1>{article.title}</h1>
      <div>
        <div>
          <span>{userNickname.nickname}</span>
          <span>
            {article.createdAt === article.updatedAt
              ? dayjs(article.createdAt).format('YYYY년 MM월 DD일')
              : dayjs(article.updatedAt).format('YYYY년 MM월 DD일')}
          </span>
          <span>♥ {article.like}</span>
        </div>
        <div>
          <button>팔로우</button>
        </div>
        <div>
          <div>
            {JSON.parse(article.imageUrl).map((url, index) => (
              <img key={index} src={url} alt="이미지" />
            ))}
          </div>
          {/* 스타일 작업 시 아래 스타일 적용 부탁드립니다! */}
          <div style={{ whiteSpace: 'pre-wrap' }}>{article.content}</div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDisplay;
