import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { checkSignIn } from '../../redux/slices/authSlice';
import supabase from '../../supabase/supabase';
import dayjs from 'dayjs';
import { validateLength } from '../../utils/validators';

const ArticleUpdateForm = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState([]);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [editedImage, setEditedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 로그인한 회원 정보가 없을 경우
  if (!user) {
    return <div>잘못된 접근입니다.</div>;
  }

  useEffect(() => {
    dispatch(checkSignIn());
    const fetchData = async () => {
      // 게시글 정보 가져오기
      const { data: articleData, error: articleError } = await supabase
        .from('Articles')
        .select('*')
        .eq('articleId', articleId)
        .single();

      if (articleError) {
        throw articleError;
      }
      setArticle(articleData);
      setEditedTitle(articleData.title);
      setEditedContent(articleData.content);
      setPreviewUrl(articleData.imageUrl);
    };

    fetchData();
  }, [dispatch, articleId]);

  // 사용자가 첨부한 이미지 미리보기
  const handleImageChange = async (imageFile) => {
    setEditedImage(imageFile);
    setPreviewUrl(URL.createObjectURL(imageFile));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // 유효성 검사: 제목 5자 이상
    if (!validateLength(editedTitle, 5)) {
      alert('제목을 5자 이상 입력해 주세요.');
      return;
    }

    // 유효성 검사: 내용 10자 이상
    if (!validateLength(editedContent, 10)) {
      alert('내용을 10자 이상 입력해 주세요.');
      return;
    }

    let publicUrl = article.imageUrl;

    try {
      // 사용자가 새로운 이미지를 첨부했을 경우
      if (editedImage) {
        // 사용자가 첨부한 이미지를 스토리지에 업로드
        const imageFileExtension = editedImage.type.split('/')[1];
        const imageFileName = `${crypto.randomUUID()}.${imageFileExtension}`;

        const { data: imageUploadData, error: imageUploadError } = await supabase.storage
          .from('images')
          .upload(imageFileName, editedImage);

        if (imageUploadError) {
          throw imageUploadError;
        }

        // 업로드한 이미지의 url 가져오기
        const { data: imageUrlData, error: imageUrlError } = await supabase.storage
          .from('images')
          .getPublicUrl(imageUploadData.path);

        if (imageUrlError) {
          throw imageUrlError;
        }

        publicUrl = imageUrlData.publicUrl;
      }

      // 게시글 수정
      const timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss');
      const { ArticleUpdateError } = await supabase
        .from('Articles')
        .update({ title: editedTitle, content: editedContent, imageUrl: publicUrl, updatedAt: timestamp })
        .eq('articleId', articleId);

      if (ArticleUpdateError) {
        throw ArticleUpdateError;
      }

      // 수정한 게시글로 이동
      navigate(`/articles/${articleId}`, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section>
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => {
              setEditedTitle(e.target.value);
            }}
            placeholder="제목을 입력하세요."
          ></input>
        </div>
        <div>
          이미지
          <input
            type="file"
            accept="image/jpeg, image/png"
            onChange={(e) => {
              handleImageChange(e.target.files[0]);
            }}
          ></input>
        </div>
        <div>
          <div>첨부된 이미지 미리보기</div>
          <div>
            {previewUrl ? <img src={previewUrl} alt="미리보기 이미지" /> : <span>이미지를 첨부해 주세요.</span>}
          </div>
        </div>
        <div>
          <textarea
            value={editedContent}
            onChange={(e) => {
              setEditedContent(e.target.value);
            }}
            placeholder="당신의 이야기를 적어보세요..."
          ></textarea>
        </div>
        <div>
          <button onClick={handleOnSubmit}>수정하기</button>
        </div>
      </section>
    </>
  );
};

export default ArticleUpdateForm;
