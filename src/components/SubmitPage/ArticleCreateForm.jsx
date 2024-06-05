import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkSignIn } from '../../redux/slices/authSlice';
import supabase from '../../supabase/supabase';
import dayjs from 'dayjs';
import { validateLength } from '../../utils/validators';

const ArticleCreateForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSignIn());
  }, [dispatch]);

  // 로그인한 회원 정보가 없을 경우
  if (!user) {
    return <div>잘못된 접근입니다.</div>;
  }

  // 사용자가 첨부한 이미지 미리보기
  const handleImageChange = async (imageFile) => {
    const file = imageFile;
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // 유효성 검사: 제목 5자 이상
    if (!validateLength(title, 5)) {
      alert('제목을 5자 이상 입력해 주세요.');
      return;
    }

    // 유효성 검사: 이미지 첨부
    if (!image) {
      alert('이미지를 첨부해 주세요.');
      return;
    }

    // 유효성 검사: 내용 10자 이상
    if (!validateLength(content, 10)) {
      alert('내용을 10자 이상 입력해 주세요.');
      return;
    }

    try {
      // 사용자가 첨부한 이미지를 스토리지에 업로드
      const imageFileExtension = image.type.split('/')[1];
      const imageFileName = `${crypto.randomUUID()}.${imageFileExtension}`;

      const { data: imageUploadData, error: imageUploadError } = await supabase.storage
        .from('images')
        .upload(imageFileName, image);

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

      const publicUrl = imageUrlData.publicUrl;

      // 게시글 등록
      const timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss');
      const { articleError } = await supabase.from('Articles').insert({
        articleId: crypto.randomUUID(),
        title,
        content,
        imageUrl: [publicUrl],
        createdAt: timestamp,
        updatedAt: timestamp,
        userId: user.id
      });

      if (articleError) {
        throw articleError;
      } else {
        setTitle('');
        setContent('');
        setImage(null);
        setPreviewUrl('');

        // 메인 페이지로 이동
        navigate('/');
      }
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
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
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
          <input
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="당신의 이야기를 적어보세요..."
          ></input>
        </div>
        <div>
          <button onClick={handleOnSubmit}>출간하기</button>
        </div>
      </section>
    </>
  );
};

export default ArticleCreateForm;
